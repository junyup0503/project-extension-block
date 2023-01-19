/* eslint-disable import/no-dynamic-require */
import Sequelize from 'sequelize';
import sequelizeConfig from '../config/sequelize.config';
import initModels from './init-models';

const env = process.env.NODE_ENV || 'development';
const config = sequelizeConfig[env];

console.log(config);

if (env === 'staging') {
  let auth = {};
  if (process.env.DATABASE_AUTHINFO) {
    auth = JSON.parse(process.env.DATABASE_AUTHINFO);
  }
  config.username = auth.username;
  config.password = auth.password;
  config.database = process.env.DB_PREFIX;
  config.host = process.env.DB_HOST;
}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

export const db = initModels(sequelize);
