/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';

type IAPiResponse<T> = {
  success: boolean;
  statusCode: number;
  message?: string | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T | null;
};


const sendAPiResponse = <T>(res: Response, data: IAPiResponse<T>): void => {
  const response: any = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
  };

  if (data.meta !== null) {
    response.meta = data.meta;
  }
  if (data.data) {
    response.data = data.data || null;
  }

  res.status(data.statusCode).json(response);
};

export default sendAPiResponse;
