export const configs = {
  database: process.env.DATABASE || 'extension-block',
  port: process.env.DB_PORT || 3306,
  host: process.env.DB_HOST || '127.0.0.1',
  username: process.env.DB_USERNAME || 'roott',
  password: process.env.DB_PASSWORD || 'bytv10041004!',
  dialect: process.env.DB_DIALECT || 'mysql',
};
