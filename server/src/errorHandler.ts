import strings from '@shared/constants/strings';
import { HttpError } from '@shared/utilities/APIError';
import wrapResponseData from '@shared/utilities/wrapResponseData';
import { Request, Response } from 'express';

export default function errorHandler(err: HttpError | Error, req: Request, res: Response): void {
  res.status(err instanceof HttpError ? err.status : 500).json(
    wrapResponseData(err.message || strings.ERROR, true),
  );
}
