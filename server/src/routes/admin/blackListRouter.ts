import express from 'express';

import wrapError from '@shared/utilities/wrapError';
import blackListController from '@controllers/blackListController';
import handleValidationError from '@shared/utilities/handleValidationError';
import { body } from 'express-validator';

const blackListRouter = express.Router();

blackListRouter.post('/', [
  body('target').isString().matches(/.+:\d+/),
], handleValidationError, wrapError(blackListController.addTarget));
blackListRouter.delete('/', wrapError(blackListController.removeTarget));
blackListRouter.get('/', wrapError(blackListController.getList));

export default blackListRouter;
