import express from 'express';
import { body, query } from 'express-validator';

import reportController from '@controllers/reportController';
import wrapError from '@shared/utilities/wrapError';
import blackListController from '@controllers/blackListController';

const proxyRouter = express.Router();

proxyRouter.post('/addRequest', [
  body('target').isString(),
  body('length').isNumeric(),
  body('isBlocked').isBoolean(),
], wrapError(reportController.addRequest));

proxyRouter.get('/checkRequest', [
  query('target').isString(),
], wrapError(blackListController.checkRequest));

export default proxyRouter;
