import db, { Model, Optional, DataTypes } from '@services/db';

import { ADMIN_TABLE_NAME } from '../shared/tableNames';

interface AdminAttributes {
  id: number;
  username: string;
  password: string;
}

type AdminCreationAttributes = AdminAttributes & Optional<AdminAttributes, 'id'>;

interface AdminInstance
  extends Model<AdminAttributes, AdminCreationAttributes>,
  AdminAttributes {}

const Admin = db.define<AdminInstance>(
  ADMIN_TABLE_NAME, {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Admin;
