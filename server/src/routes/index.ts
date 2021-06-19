import e from 'express';
import homeRouter from './homeRouter';

export default function registerRoutes(app: e.Express): void {
  app.use('/', homeRouter);
}
