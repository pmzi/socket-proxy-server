import Report from '@models/Report';
import strings from '@shared/constants/strings';
import APIError from '@shared/utilities/APIError';
import wrapResponseData from '@shared/utilities/wrapResponseData';
import { ControllerMethodType, ControllerType } from './shared/types';

interface ReportController {
  addRequest: ControllerMethodType;
  getRequests: ControllerMethodType;
}

const reportController: ControllerType<ReportController> = {
  async addRequest(req, res) {
    const { target, length, isBlocked } = req.body;

    try {
      await Report.create({
        target,
        length,
        isBlocked,
      });

      res.json(wrapResponseData(strings.reports.ADD_REPORT));
    } catch (e) {
      throw new APIError.InternalServerError(e.message);
    }
  },
  async getRequests(req, res) {
    const { target } = req.query;

    try {
      let result;

      if (target) {
        result = await Report.findAll({
          where: {
            target,
          },
          order: [['id', 'DESC']],
        });
      } else {
        result = await Report.findAll({
          order: [['id', 'DESC']],
        });
      }

      res.send(wrapResponseData(result));
    } catch (e) {
      throw new APIError.InternalServerError(e.message);
    }
  },
};

export default reportController;
