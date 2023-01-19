/**
 * This middleware is responsible for returning a json every time
 * an error comes in. We use in the app.js as global middleware
 */
import { config } from 'dotenv';

config();

export default (err, request, response, next) => {
  const isStaging = process.env.NODE_ENV === 'staging';
  let errorMessage = {};

  if (response.headersSent) {
    return next(err);
  }

  if (!isStaging) {
    errorMessage = err;
    console.log('errMessage:', err);
  }

  return response.status(err.statusCode || 500).json({
    code: err.code || 5000,
    msg: err.msg || err.message,
    ...(!isStaging && { trace: errorMessage }),
  });
};
