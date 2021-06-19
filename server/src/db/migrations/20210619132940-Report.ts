import Sequelize, { QueryInterface } from 'sequelize';
import { REPORT_TABLE_NAME } from '../shared/tableNames';

export default {
  up: async (queryInterface: QueryInterface, sq: typeof Sequelize): Promise<void> => {
    await queryInterface.createTable(REPORT_TABLE_NAME, {
      id: {
        type: sq.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      target: {
        type: sq.DataTypes.STRING,
        allowNull: false,
      },
      length: {
        type: sq.DataTypes.BIGINT,
        allowNull: true,
      },
      isBlocked: {
        type: sq.DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.dropTable(REPORT_TABLE_NAME);
  },
};
