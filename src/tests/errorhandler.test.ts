import { Request, Response, NextFunction } from 'express';
import { errorHandler, CustomError } from '../middlewares/errorHandler';

describe('errorHandler middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  it('should handle CustomError instances', () => {
    const customError = new CustomError(400, 'Bad Request');
    errorHandler(customError, mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Bad Request' });
    expect(nextFunction).not.toHaveBeenCalled();
  });

  it('should handle other types of errors', () => {
    const error = new Error('Something went wrong');
    errorHandler(error, mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Something went wrong' });
    expect(nextFunction).not.toHaveBeenCalled();
  });
});
