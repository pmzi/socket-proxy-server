import strings from '@shared/constants/strings';
import { NextFunction, Response, Request } from 'express';
import { validationResult } from 'express-validator';
import APIError from './APIError';

export default function handleValidationError(
  req: Request, res: Response, next: NextFunction,
): void {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    next(new APIError.BadRequest(strings.VALIDATION_ERROR));
  }

  next();
}
