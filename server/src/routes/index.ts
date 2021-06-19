import e from 'express';
import homeRouter from './homeRouter';
import proxyRouter from './proxyRouter';

export default function registerRoutes(app: e.Express): void {
  app.use('/', homeRouter);
  app.use('/proxy', proxyRouter);
}
