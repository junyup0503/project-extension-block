import dotenv from 'dotenv';
import path from 'path';

const loading = () => {
  if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: path.join(__dirname, '../../.env.local') });
  } else if (process.env.NODE_ENV === 'staging') {
    dotenv.config({ path: path.join(__dirname, '../../.env.staging') });
  }
};

export const envLoad = loading();
