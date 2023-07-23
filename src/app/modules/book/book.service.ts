import { IBook } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (book: IBook): Promise<IBook | null> => {

    const createdCow = await Book.create(book);
    return createdCow;
  };

  const getAllBooks = async (
  ): Promise<IBook[]> => {


    const result = await Book.find()

    return  result
  
  };


  const getSingleBook = async (id: string): Promise<IBook | null> => {
    const result = await Book.findById(id);
    return result;
  };

  export const BookServices = {createBook ,getAllBooks , getSingleBook}