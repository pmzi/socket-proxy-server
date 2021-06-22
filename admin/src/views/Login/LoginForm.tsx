import strings from '@shared/constants/strings';
import { required } from '@shared/utilities/validation';
import {
  Form, Button, Input,
} from 'antd';

export type OnSubmitType = (args: { username: string; password: string; }) => void;

interface IProps {
  onSubmit: OnSubmitType;
}

export default function LoginForm({ onSubmit }: IProps): JSX.Element {
  return (
    <Form
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
        <Button type="primary" htmlType="submit">
          {strings.auth.login.SUBMIT}
        </Button>
      </Form.Item>
    </Form>
  );
}
