import e from 'express';

import jwtGuard from '@shared/middlewares/jwtGuard';
import authRouter from './authRouter';
import blackListRouter from './blackListRouter';
import reportRouter from './reportRouter';

export default function registerAdminRoutes(app: e.Express, prefix: string): void {
  app.use(jwtGuard);

  app.use(`${prefix}/auth`, authRouter);
  app.use(`${prefix}/blackList`, blackListRouter);
  app.use(`${prefix}/report`, reportRouter);
}
