import db, { Model, Optional, DataTypes } from '@services/db';

import { BLACK_LISTS_TABLE_NAME } from '../shared/tableNames';

interface BlackListAttributes {
  id: number;
  target: string;
}

type BlackListCreationAttributes = Optional<BlackListAttributes, 'id'>;

interface BlackListInstance
  extends Model<BlackListAttributes, BlackListCreationAttributes>,
  BlackListAttributes {
  createdAt: Date;
  updatedAt: Date;
}

const BlackList = db.define<BlackListInstance>(
  BLACK_LISTS_TABLE_NAME, {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    target: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  },
);

export default BlackList;
