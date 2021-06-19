import { ControllerMethodType, ControllerType } from './shared/types';

interface AuthController {
  login: ControllerMethodType;
  createAdmin: ControllerMethodType;
  removeAdmin: ControllerMethodType;
}

const authController: ControllerType<AuthController> = {
  async login(req, res) {

  },
  async createAdmin(req, res) {

  },
  async removeAdmin(req, res){

  }
};

export default authController;
