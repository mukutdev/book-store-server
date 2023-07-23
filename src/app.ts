import cors from "cors";
import express, { Application, Request, Response } from "express";
import httpStatus from "http-status";
import routes from "./app/routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app: Application = express();

app.use(cors());

//parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Book Store working successfully!");
});

app.use(globalErrorHandler);

export default app;
