import { ControllerMethodType, ControllerType } from './shared/types';

interface BlackListController {
  checkRequest: ControllerMethodType;
  addTarget: ControllerMethodType;
  removeTarget: ControllerMethodType;
}

const blackListController: ControllerType<BlackListController> = {
  async checkRequest(req, res) {

  },
  async addTarget(req, res) {

  },
  async removeTarget(req, res) {

  },
};

export default blackListController;
