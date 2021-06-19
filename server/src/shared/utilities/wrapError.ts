import { NextFunction, Request, Response } from 'express';

export default function wrapError(
  fn: (req: Request, res: Response) => Promise<void>,
) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await fn(req, res);
    } catch (e) {
      next(e);
    }
  };
}
