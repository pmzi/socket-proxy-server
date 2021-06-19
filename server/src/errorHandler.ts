import strings from '@shared/constants/strings';
import { HttpError } from '@shared/utilities/APIError';
import wrapResponseData from '@shared/utilities/wrapResponseData';
import { Request, Response } from 'express';

export default function errorHandler(err: HttpError, req: Request, res: Response): void {
  res.status(err.status).json(
    wrapResponseData(err.message || strings.ERROR, true),
  );
}
