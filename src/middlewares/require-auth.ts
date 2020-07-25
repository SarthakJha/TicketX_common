import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { NotAuthorizedError } from '../errors/not-authorized-error';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    // if user not logged in
    throw new NotAuthorizedError();
  }
  // if logged in
  next();
};
