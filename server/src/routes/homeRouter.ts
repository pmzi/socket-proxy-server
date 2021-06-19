import express from 'express';

const homeRouter = express.Router();

/* GET users listing. */
homeRouter.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

export default homeRouter;
