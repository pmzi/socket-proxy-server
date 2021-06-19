import express, {
  NextFunction, Request, Response,
} from 'express';

import cookieParser from 'cookie-parser';
import logger from 'morgan';

import registerRoutes from './routes';
import APIError from './shared/utilities/APIError';
import errorHandler from './errorHandler';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

registerRoutes(app);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new APIError.NotFound());
});

// error handler
app.use(errorHandler);

export default app;
