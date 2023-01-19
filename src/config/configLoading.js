import dotenv from 'dotenv';
import path from 'path';

const loading = () => {
  if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: path.join(__dirname, '../../.env.local') });
  }
};

export const envLoad = loading();
