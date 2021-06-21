import strings from '@shared/constants/strings';
import { notification } from 'antd';

type NotifyMethodType = ({
  message,
  description,
}: {
  message?: string;
  description?: string
}) => void;

interface INotify {
  success: NotifyMethodType;
  error: NotifyMethodType;
  warning: NotifyMethodType;
  info: NotifyMethodType;
}

function config(): void {
  notification.config({
    rtl: true,
    placement: 'topRight',
  });
}

const notify: INotify = {
  success({ message = strings.notify.SUCCESS, description }) {
    // Dirty hack to apply config
    config();

    notification.success({
      message,
      description,
    });
  },
  error({ message = strings.notify.ERROR, description }) {
    // Dirty hack to apply config
    config();

    notification.error({
      message,
      description,
    });
  },
  warning({ message = strings.notify.WARNING, description }) {
    // Dirty hack to apply config
    config();

    notification.warning({
      message,
      description,
    });
  },
  info({ message = strings.notify.INFO, description }) {
    // Dirty hack to apply config
    config();

    notification.info({
      message,
      description,
    });
  },
};

export default notify;
