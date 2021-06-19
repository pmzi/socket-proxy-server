import express from 'express';
import { body, query } from 'express-validator';

import reportController from '@controllers/reportController';
import wrapError from '@shared/utilities/wrapError';
import blackListController from '@controllers/blackListController';
import handleValidationError from '@shared/utilities/handleValidationError';

const proxyRouter = express.Router();

proxyRouter.post('/addRequest',
  [
    body('target').isString(),
    body('length').isNumeric(),
    body('isBlocked').isAlpha(),
  ],
  handleValidationError,
  wrapError(reportController.addRequest));

proxyRouter.get('/checkRequest',
  [
    query('target').isString(),
  ],
  handleValidationError,
  wrapError(blackListController.checkRequest));

export default proxyRouter;
