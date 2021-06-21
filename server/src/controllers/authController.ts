import Admin from '@models/Admin';
import strings from '@shared/constants/strings';
import APIError from '@shared/utilities/APIError';
import encrypt from '@shared/utilities/encrypt';
import wrapResponseData from '@shared/utilities/wrapResponseData';
import jwt from '@shared/services/jwt';
import { RequestUser } from '@shared/type';
import { ControllerMethodType, ControllerType } from './shared/types';

interface AuthController {
  login: ControllerMethodType;
  createAdmin: ControllerMethodType;
  removeAdmin: ControllerMethodType;
}

const authController: ControllerType<AuthController> = {
  async login(req, res) {
    const { username, password } = req.body;

    try {
      const foundUser = await Admin.findOne({
        where: {
          username,
          password: encrypt(password),
        },
      });

      if (!foundUser) throw new APIError.NotFound(strings.admin.LOGIN_ERROR);

      res.json(wrapResponseData({
        username: foundUser.username,
        jwt: jwt.sign({ username }),
      }));
    } catch (e) {
      throw new APIError.InternalServerError(e.message);
    }
  },
  async createAdmin(req, res) {
    const { username, password } = req.body;

    try {
      const newAdmin = await Admin.create({
        username,
        password: encrypt(password),
      });

      res.send(wrapResponseData(newAdmin));
    } catch (e) {
      throw new APIError.InternalServerError(e.message);
    }
  },
  async removeAdmin(req, res) {
    const { username } = req.query;
    const { username: currentAdminUsername } = req.user as RequestUser;

    if (username === currentAdminUsername) throw new APIError.BadRequest(strings.admin.SELF_DELETE);

    try {
      await Admin.destroy({
        where: { username },
      });

      res.send(wrapResponseData(strings.admin.REMOVE));
    } catch (e) {
      throw new APIError.InternalServerError(e.message);
    }
  },
};

export default authController;
