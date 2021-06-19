import { Request, Response } from 'express';

export type ControllerMethodType = (req: Request, res: Response) => Promise<void>;

export type ControllerType<T> = {
  [index: string]: ControllerMethodType;
} & T;
