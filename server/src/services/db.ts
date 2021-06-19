import { Sequelize } from 'sequelize';

const db = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = Number(process.env.DB_PORT);

const sequelize = new Sequelize(db, username, password, {
  host,
  dialect: 'postgres',
  port,
});

export default sequelize;
