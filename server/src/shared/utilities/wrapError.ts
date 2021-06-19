import { NextFunction, Request, Response } from 'express';

export default function wrapError(
  req: Request, res: Response, next: NextFunction,
) {
  return async (fn: (req: Request, res: Response) => Promise<void>): Promise<void> => {
    try {
      await fn(req, res);
    } catch (e) {
      next(e);
    }
  };
}
