import BlackList from '@models/BlackList';
import strings from '@shared/constants/strings';
import APIError from '@shared/utilities/APIError';
import wrapResponseData from '@shared/utilities/wrapResponseData';
import { ControllerMethodType, ControllerType } from './shared/types';

interface BlackListController {
  checkRequest: ControllerMethodType;
  addTarget: ControllerMethodType;
  removeTarget: ControllerMethodType;
  getList: ControllerMethodType;
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

      res.json(wrapResponseData(newTarget));
    } catch (e) {
      throw new APIError.InternalServerError(e.message);
    }
  },
  async removeTarget(req, res) {
    const { target } = req.query;

    try {
      await BlackList.destroy({ where: { target } });

      res.json(wrapResponseData(strings.blackList.REMOVE));
    } catch (e) {
      throw new APIError.InternalServerError(e.message);
    }
  },
  async getList(req, res) {
    try {
      const list = await BlackList.findAll({
        order: [['id', 'DESC']],
      });

      res.json(wrapResponseData(list));
    } catch (e) {
      throw new APIError.InternalServerError(e.message);
    }
  },
};

export default blackListController;
