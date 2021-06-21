import express from 'express';

import wrapError from '@shared/utilities/wrapError';
import authController from '@controllers/authController';
import jwtGuard from '@shared/middlewares/jwtGuard';

const authRouter = express.Router();

authRouter.post('/login', wrapError(authController.login));
authRouter.post('/', jwtGuard, wrapError(authController.createAdmin));
authRouter.delete('/', jwtGuard, wrapError(authController.removeAdmin));
authRouter.get('/userData', jwtGuard, wrapError(authController.getInfo));

export default authRouter;
