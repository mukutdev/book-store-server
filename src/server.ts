import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { Server } from 'http';

let server: Server;
async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`Book Store app listening on port ${config.port}`);
    });

    console.log('Database connected');
  } catch (error) {
    console.log('failed to connect database', error);
  }

  process.on('unhandledRejection', error => {
    console.error('promptly server closing');
    if (server) {
      server.close(() => {
        console.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
main();

process.on('SIGTERM', () => {
  console.info('Sigterm received');
  if (server) {
    server.close();
  }
});
