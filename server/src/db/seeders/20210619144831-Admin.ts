import Sequelize, { QueryInterface } from 'sequelize';
import encrypt from '../../shared/utilities/encrypt';
import { ADMIN_TABLE_NAME, BLACK_LISTS_TABLE_NAME } from '../shared/tableNames';

export default {
  up: async (queryInterface: QueryInterface, sq: typeof Sequelize): Promise<void> => {
    await queryInterface.bulkInsert(ADMIN_TABLE_NAME, [{
      username: 'admin',
      password: encrypt('admin'),
    }]);
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.bulkDelete(ADMIN_TABLE_NAME, {
      username: 'admin',
    });
  },
};
