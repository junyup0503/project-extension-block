export default {
  development: {
    database: process.env.DATABASE || 'extension-block',
    host: process.env.DB_HOST || '127.0.0.1',
    username: process.env.DB_USERNAME || 'roott',
    password: process.env.DB_PASSWORD || 'bytv10041004!',
    dialect: process.env.DB_DIALECT || 'mysql',

    // username: configs.username,
    // password: configs.password,
    // database: configs.database,
    // host: configs.host,
    // dialect: configs.dialect,
  },
  staging: {
    database: process.env.DATABASE || 'extension-block',
    host: process.env.DB_HOST || '127.0.0.1',
    username: process.env.DB_USERNAME || 'roott',
    password: process.env.DB_PASSWORD || 'bytv10041004!',
    dialect: process.env.DB_DIALECT || 'mysql',

    // username: configs.username,
    // password: configs.password,
    // database: configs.database,
    // host: configs.host,
    // dialect: configs.dialect,
    logging: false,
  },
};
