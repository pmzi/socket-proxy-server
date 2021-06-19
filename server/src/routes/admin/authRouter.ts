import express from 'express';

import homeController from '@controllers/homeController';
import wrapError from '@shared/utilities/wrapError';

const authRouter = express.Router();

authRouter.get('/', wrapError(homeController.home));

export default authRouter;
