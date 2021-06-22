import strings from '@shared/constants/strings';
import { Table } from 'antd';

interface IData {
  id: number;
  target: string;
  length?: number;
  isBlocked: boolean;
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
    title: strings.LENGTH,
    dataIndex: 'length',
  },
  {
    title: strings.IS_BLOCKED,
    dataIndex: 'isBlocked',
    render(isBlocked: boolean) {
      return (isBlocked
        ? <span className="text-danger">{strings.BLOCKED}</span>
        : <span className="text-success">{strings.NOT_BLOCKED}</span>);
    },
  },
  {
    title: strings.CREATED_AT,
    dataIndex: 'createdAt',
  },
];

export default function PanelReportTable({ data }: IProps): JSX.Element {
  return (
    <Table
      columns={columns}
      dataSource={data}
    />
  );
}
