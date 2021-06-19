import express from 'express';

import homeController from '@controllers/homeController';

const homeRouter = express.Router();

/* GET users listing. */
homeRouter.get('/', homeController.home);

export default homeRouter;
