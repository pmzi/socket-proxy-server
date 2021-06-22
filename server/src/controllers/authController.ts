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
  getInfo: ControllerMethodType;
  getAll: ControllerMethodType;
}

const authController: ControllerType<AuthController> = {
  async login(req, res) {
    const { username, password } = req.body;

    const foundUser = await Admin.findOne({
      where: {
        username,
        password: encrypt(password),
      },
    });

    if (!foundUser) throw new APIError.NotFound(strings.admin.LOGIN_ERROR);

    res.json(wrapResponseData(jwt.sign({ username })));
  },
  async createAdmin(req, res) {
    const { username, password } = req.body;

    try {
      await Admin.create({
        username,
        password: encrypt(password),
      });

      res.json(wrapResponseData({
        username,
      }));
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

      res.json(wrapResponseData(strings.admin.REMOVE));
    } catch (e) {
      throw new APIError.InternalServerError(e.message);
    }
  },
  async getInfo(req, res) {
    const { username } = req.user as RequestUser;

    try {
      const adminInfo = await Admin.findOne({
        where: { username },
        attributes: ['username'],
      });

      res.json(wrapResponseData(adminInfo));
    } catch (e) {
      throw new APIError.InternalServerError(e.message);
    }
  },
  async getAll(req, res) {
    try {
      const admins = await Admin.findAll({
        order: [['id', 'DESC']],
        attributes: ['id', 'username'],
      });

      res.json(wrapResponseData(admins));
    } catch (e) {
      throw new APIError.InternalServerError(e.message);
    }
  },
};

export default authController;
