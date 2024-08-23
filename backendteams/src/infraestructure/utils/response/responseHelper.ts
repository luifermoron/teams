import { Response } from 'express';

interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: any;
}

  

export function sendSuccess<T>(res: Response, data: T, message: string = 'Success', statusCode: number = 200): void {
  const response: ApiResponse<T> = {
    success: true,
    data,
    message
  };
  res.status(statusCode).json(response);
}

export function sendError(res: Response, error: any, message: string = 'Something went wrong', statusCode: number = 500): void {
  const response: ApiResponse<null> = {
    success: false,
    error,
    message
  };
  res.status(statusCode).json(response);
}