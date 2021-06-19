import express from 'express';

import wrapError from '@shared/utilities/wrapError';
import reportController from '@controllers/reportController';

const reportRouter = express.Router();

reportRouter.get('/', wrapError(reportController.getRequests));

export default reportRouter;
