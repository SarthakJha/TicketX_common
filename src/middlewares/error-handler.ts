import { Request, Response, NextFunction } from 'express';
import { CustomErrors } from '../errors/custom-errors';
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomErrors) {
    // this custom formatted error message will be same throughout all services
    /*
    {
    "errors": [
        {
            "message": "not a valid email address",
            "field": "email"
        }
    ]
} 
    */

    res.status(err.statusCode).send({ errors: err.serializeError() });
  }
  // for better debugging in case of unexpected error
  console.error(err);
  //this error is for when an unexpected error takes place
  res.status(500).send({
    errors: {
      message: 'exception faced',
    },
  });
};
