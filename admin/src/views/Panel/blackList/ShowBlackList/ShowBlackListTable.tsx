import strings from '@shared/constants/strings';
import { Table } from 'antd';

interface IData {
  id: number;
  target: string;
  createdAt: string;
}
interface IProps {
  data: IData[];
}

const columns = [
  {
    title: '#',
    dataIndex: 'id',
  },
  {
    title: strings.TARGET,
    dataIndex: 'target',
  },
  {
    title: strings.CREATED_AT,
    dataIndex: 'createdAt',
  },
];

export default function ShowBlackListTable({ data }: IProps): JSX.Element {
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data}
    />
  );
}
