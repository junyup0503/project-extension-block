import { configs } from './configs';

export default {
  development: {
    username: configs.username,
    password: configs.password,
    database: configs.database,
    host: configs.host,
    dialect: configs.dialect,
  },
  staging: {
    username: configs.username,
    password: configs.password,
    database: configs.database,
    host: configs.host,
    dialect: configs.dialect,
    logging: false,
  },
};
