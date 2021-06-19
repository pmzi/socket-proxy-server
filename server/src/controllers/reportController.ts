import { ControllerMethodType, ControllerType } from './shared/types';

interface ReportController {
  addRequest: ControllerMethodType;
  getRequests: ControllerMethodType;
}

const reportController: ControllerType<ReportController> = {
  async addRequest(req, res) {

  },
  async getRequests(req, res){

  },
};

export default reportController;
