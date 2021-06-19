import { Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = Number(process.env.DB_PORT);

const db = new Sequelize(dbName, username, password, {
  host,
  dialect: 'postgres',
  port,
});

export * from 'sequelize';

export default db;
