import strings from '@shared/constants/strings';
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
        label={strings.auth.login.USERNAME}
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={strings.auth.login.PASSWORD}
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
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
