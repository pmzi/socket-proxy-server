import express from 'express';

import wrapError from '@shared/utilities/wrapError';
import blackListController from '@controllers/blackListController';

const blackListRouter = express.Router();

blackListRouter.post('/', wrapError(blackListController.addTarget));
blackListRouter.delete('/', wrapError(blackListController.removeTarget));
blackListRouter.get('/', wrapError(blackListController.removeTarget));

export default blackListRouter;
