import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendAPiResponse from "../../../shared/sendApiResponse";
import httpStatus from 'http-status';
import { BookServices } from "./book.service";
import { IBook } from "./book.interface";


const createBook : RequestHandler = catchAsync(
    async(req : Request , res : Response)=>{
        const { ...BookData } = req.body;
        const result = await BookServices.createBook(BookData);
    
        sendAPiResponse(res, {
          success: true,
          statusCode: httpStatus.OK,
          message: 'Book created successfully',
          data: result,
        });
      }
    

)

const getAllBooks: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
 
      const result = await BookServices.getAllBooks();
  
      sendAPiResponse<IBook[]>(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Books retrieved successfully',
        data: result,
      });
    }
  );
  
  const getSingleBook: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const id = req.params.id;
      const result = await BookServices.getSingleBook(id);
      sendAPiResponse<IBook>(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'book retrieved successfully',
        data: result,
      });
    }
  );
  

export const BookController = {createBook , getAllBooks , getSingleBook}