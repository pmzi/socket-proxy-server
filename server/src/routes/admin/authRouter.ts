import express from 'express';

import wrapError from '@shared/utilities/wrapError';
import authController from '@controllers/authController';
import jwtGuard from '@shared/middlewares/jwtGuard';
import handleValidationError from '@shared/utilities/handleValidationError';
import { body } from 'express-validator';

const authRouter = express.Router();

authRouter.post('/login',
  [
    body('username').isString(),
    body('password').isString(),
  ],
  handleValidationError,
  wrapError(authController.login));
authRouter.post('/', jwtGuard, wrapError(authController.createAdmin));
authRouter.delete('/', jwtGuard, wrapError(authController.removeAdmin));
authRouter.get('/userData', jwtGuard, wrapError(authController.getInfo));

export default authRouter;
