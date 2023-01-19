/* eslint-disable import/no-dynamic-require */
import Sequelize from 'sequelize';
import sequelizeConfig from '../config/sequelize.config';
import initModels from './init-models';

const env = process.env.NODE_ENV || 'development';
const config = sequelizeConfig[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

export const db = initModels(sequelize);
