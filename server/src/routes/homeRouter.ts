import express from 'express';

import homeController from '@controllers/homeController';
import wrapError from '@shared/utilities/wrapError';

const homeRouter = express.Router();

/* GET users listing. */
homeRouter.get('/', wrapError(homeController.home));

export default homeRouter;
