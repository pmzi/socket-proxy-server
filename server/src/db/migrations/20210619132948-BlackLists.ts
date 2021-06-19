import Sequelize, { QueryInterface } from 'sequelize';
import { BLACK_LISTS_TABLE_NAME } from '../shared/tableNames';

export default {
  up: async (queryInterface: QueryInterface, sq: typeof Sequelize): Promise<void> => {
    await queryInterface.createTable(BLACK_LISTS_TABLE_NAME, {
      id: {
        type: sq.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      target: {
        type: sq.DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.dropTable(BLACK_LISTS_TABLE_NAME);
  },
};