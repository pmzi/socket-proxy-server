import db, {
  Optional, DataTypes, Model,
} from '@services/db';

import { REPORT_TABLE_NAME } from '../shared/tableNames';

interface ReportAttributes {
  id: number;
  target: string;
  length: number | null;
  isBlocked: boolean;
}

type ReportCreationAttributes = ReportAttributes & Optional<ReportAttributes, 'id'>;

interface ReportInstance
  extends Model<ReportAttributes, ReportCreationAttributes>,
  ReportAttributes {
  createdAt: Date;
  updatedAt: Date;
}

const Report = db.define<ReportInstance>(
  REPORT_TABLE_NAME, {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    target: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    length: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    isBlocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    freezeTableName: true,
  },
);

export default Report;
