import express from 'express';
import { BookController } from './book.controller';

const router = express.Router()

router.post('/addBook' , BookController.createBook)

export const BookRoutes = router