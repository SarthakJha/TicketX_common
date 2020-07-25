import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}

//this how we modify exising
declare global {
  namespace Express {
    interface Request {
      //adding currentUser property
      currentUser?: UserPayload;
    }
  }
}
export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //if(!req.session || !req.session.jwt) same as below
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    /**
     * cant do directly req.currentUser = payload
     * so to solve this, we type cast in interface
     */
    req.currentUser = payload;
  } catch (err) {}
  next();
};
