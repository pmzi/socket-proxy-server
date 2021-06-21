import e from 'express';
import homeRouter from './homeRouter';
import proxyRouter from './proxyRouter';

import registerAdminRoutes from './admin';

export default function registerRoutes(app: e.Express): void {
  app.use('/', homeRouter);
  app.use('/proxy', proxyRouter);

  registerAdminRoutes(app, '/admin');
}
