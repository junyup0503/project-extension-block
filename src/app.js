import path from 'path';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import xss from 'xss-clean';
import './config/configLoading';
import { NotFoundError } from './helpers/errors.helper';
import errorHandler from './middlewares/errorHandler.middleware';
import v1Router from './routes/v1/index.routes';

const app = express();

app.set('trust proxy', true);

app.use(morgan('combined'));

// Set security HTTP Headers
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);

// Parse json request body
app.use(express.json());

// Parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Sanitize data
app.use(xss());

// GZIP compression
app.use(compression());

// Parsing cookie
app.use(cookieParser());

// CORS policy configuration
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'staging'
        ? 'ec2-54-178-212-88.ap-northeast-1.compute.amazonaws.com:3000'
        : true,
    credentials: true,
  }),
);

// rendering view
let viewPath = './views';
if (process.env.NODE_ENV === 'staging') {
  viewPath = '../src/views';
}
const template = path.join(__dirname, viewPath, 'index.html');
app.get('/', function (req, res) {
  res.sendFile(template);
});

// routing
app.use('/v1/api', v1Router);

// Error Handler
app.all('*', (_, res) => {
  throw new NotFoundError('Resource not found on this server!!');
});

app.use(errorHandler);

export default app;
