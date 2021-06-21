import { notification } from 'antd';

type NotifyMethodType = ({
  message,
  description,
}: {
  message: string;
  description?: string
}) => void;

interface INotify {
  success: NotifyMethodType;
  error: NotifyMethodType;
  warning: NotifyMethodType;
  info: NotifyMethodType;
}

notification.config({
  rtl: true,
});

const notify: INotify = {
  success({ message, description }) {
    notification.success({
      message,
      description,
    });
  },
  error({ message, description }) {
    notification.error({
      message,
      description,
    });
  },
  warning({ message, description }) {
    notification.warning({
      message,
      description,
    });
  },
  info({ message, description }) {
    notification.info({
      message,
      description,
    });
  },
};

export default notify;
