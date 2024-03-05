import { NextFunction, Request, Response } from 'express';
import ErrorResponse from '../types/errorResponse.type';

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: Error, req: Request, res: Response<ErrorResponse>, next: NextFunction) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? 'emoji?' : err.stack,
  });
};

export function methodNotAllowed(req: Request, res: Response, next: NextFunction) {
  next({
    status: 405,
    message: `${req.method} not allowed for ${req.originalUrl}`,
  });
};

export function asyncErrorBoundary(delegate: any, defaultStatus?: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve()
      .then(() => delegate(req, res, next))
      .catch((error = {}) => {
        const { status = defaultStatus, message = error } = error;
        next({
          status,
          message,
        });
      });
  };
};