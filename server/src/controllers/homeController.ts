import strings from '@shared/constants/strings';
import wrapResponseData from '@shared/utilities/wrapResponseData';
import { ControllerMethodType, ControllerType } from './shared/types';

interface IHomeController {
  home: ControllerMethodType;
}

const homeController: ControllerType<IHomeController> = {
  async home(req, res) {
    res.json(wrapResponseData(strings.FINE));
  },
};

export default homeController;
