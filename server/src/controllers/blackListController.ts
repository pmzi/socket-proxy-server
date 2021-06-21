import BlackList from '@models/BlackList';
import strings from '@shared/constants/strings';
import APIError from '@shared/utilities/APIError';
import wrapResponseData from '@shared/utilities/wrapResponseData';
import { ControllerMethodType, ControllerType } from './shared/types';

interface BlackListController {
  checkRequest: ControllerMethodType;
  addTarget: ControllerMethodType;
  removeTarget: ControllerMethodType;
}

const blackListController: ControllerType<BlackListController> = {
  async checkRequest(req, res) {
    const { target } = req.query;

    try {
      const found = await BlackList.findOne({
        where: {
          target,
        },
      });

      res.json(wrapResponseData(Boolean(found)));
    } catch (e) {
      throw new APIError.InternalServerError();
    }
  },
  async addTarget(req, res) {
    const { target } = req.body;

    try {
      const newTarget = await BlackList.create({
        target,
      });

      res.send(wrapResponseData(newTarget));
    } catch (e) {
      throw new APIError.InternalServerError(e.message);
    }
  },
  async removeTarget(req, res) {
    const { target } = req.query;

    try {
      await BlackList.destroy({ where: { target } });

      res.send(wrapResponseData(strings.blackList.REMOVE));
    } catch (e) {
      throw new APIError.InternalServerError(e.message);
    }
  },
};

export default blackListController;
