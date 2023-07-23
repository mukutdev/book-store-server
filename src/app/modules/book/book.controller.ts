import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendAPiResponse from "../../../shared/sendApiResponse";
import httpStatus from 'http-status';
import { BookServices } from "./book.service";


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

export const BookController = {createBook}