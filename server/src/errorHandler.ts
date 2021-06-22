import strings from '@shared/constants/strings';
import { HttpError } from '@shared/utilities/APIError';
import wrapResponseData from '@shared/utilities/wrapResponseData';
import { NextFunction, Request, Response } from 'express';

export default function errorHandler(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  err: HttpError | Error, req: Request, res: Response, _next: NextFunction,
): void {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json(wrapResponseData(strings.AUTH_EXPIRE_ERROR, true));
    return;
  }

  res.status(err instanceof HttpError ? err.status : 500).json(
    wrapResponseData(err.message || strings.ERROR, true),
  );
}
