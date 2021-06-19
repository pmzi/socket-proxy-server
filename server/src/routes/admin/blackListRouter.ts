import express from 'express';

import wrapError from '@shared/utilities/wrapError';
import blackListController from '@controllers/blackListController';

const blackListRouter = express.Router();

blackListRouter.post('/target', wrapError(blackListController.addTarget));
blackListRouter.delete('/target', wrapError(blackListController.removeTarget));

export default blackListRouter;
