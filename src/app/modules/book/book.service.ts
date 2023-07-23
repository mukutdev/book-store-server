import { IBook } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (book: IBook): Promise<IBook | null> => {

    const createdCow = await Book.create(book);
    return createdCow;
  };

  export const BookServices = {createBook}