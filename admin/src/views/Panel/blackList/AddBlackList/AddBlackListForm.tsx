import strings from '@shared/constants/strings';
import { required, withPattern } from '@shared/utilities/validation';
import {
  Form, Input, Button,
} from 'antd';

export type OnSubmitType = (arg: { target: string }) => void;

interface IProps {
  onSubmit: OnSubmitType;
  isLoading?: boolean;
}

export default function AddBlackListForm({ onSubmit, isLoading = false }: IProps): JSX.Element {
  return (
    <Form
      name="basic"
      onFinish={onSubmit}
    >
      <Form.Item
        label={strings.blackList.add.TARGET_FIELD}
        name="target"
        rules={[required(), withPattern(/^.+:\d+$/)]}
      >
        <Input placeholder={strings.blackList.add.TARGET_FIELD_PLACEHOLDER} />
      </Form.Item>

      <Form.Item>
        <Button loading={isLoading} type="primary" htmlType="submit">
          {strings.blackList.add.SUBMIT}
        </Button>
      </Form.Item>
    </Form>
  );
}
