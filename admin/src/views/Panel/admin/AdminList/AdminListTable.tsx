import strings from '@shared/constants/strings';
import { Table } from 'antd';

interface IData {
  id: number;
  username: string;
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
    title: strings.USERNAME,
    dataIndex: 'username',
  },
];

export default function AdminListTable({ data }: IProps): JSX.Element {
  return (
    <Table
      columns={columns}
      dataSource={data}
    />
  );
}
