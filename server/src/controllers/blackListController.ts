import BlackList from '@models/BlackList';
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

  },
  async removeTarget(req, res) {

  },
};

export default blackListController;
