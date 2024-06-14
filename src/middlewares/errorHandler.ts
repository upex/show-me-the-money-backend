import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Check if the error is a known error type
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  // Handle other types of errors
  return res.status(500).json({ message: 'Something went wrong' });
};

// Define a custom error class for known errors
export class CustomError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
