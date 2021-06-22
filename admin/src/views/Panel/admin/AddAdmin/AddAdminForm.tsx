import {
  Form, Input, Button,
} from 'antd';

import { required } from '@shared/utilities/validation';
import strings from '@shared/constants/strings';

export type OnSubmitType = (arg: { username: string; password: string; }) => void;

interface IProps {
  onSubmit: OnSubmitType;
  isLoading?: boolean;
}

export default function AddAdminForm({ onSubmit, isLoading = false }: IProps): JSX.Element {
  return (
    <Form
      name="basic"
      onFinish={onSubmit}
    >
      <Form.Item
        label={strings.USERNAME}
        name="username"
        rules={[required()]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={strings.PASSWORD}
        name="password"
        rules={[required()]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button loading={isLoading} type="primary" htmlType="submit">
          {strings.blackList.add.SUBMIT}
        </Button>
      </Form.Item>
    </Form>
  );
}
