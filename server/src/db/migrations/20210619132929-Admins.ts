import Sequelize, { QueryInterface } from 'sequelize';
import { ADMIN_TABLE_NAME } from '../shared/tableNames';

export default {
  up: async (queryInterface: QueryInterface, sq: typeof Sequelize): Promise<void> => {
    await queryInterface.createTable(ADMIN_TABLE_NAME, {
      id: {
        type: sq.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: sq.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: sq.DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.dropTable(ADMIN_TABLE_NAME);
  },
};
