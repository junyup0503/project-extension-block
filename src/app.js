import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import { NotFoundError } from './helpers/errors.helper';
import errorHandler from './middlewares/errorHandler.middleware';
import v1Router from './routes/v1/index.routes';

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.join(__dirname, '../.env.local') });
}

const app = express();

app.set('trust proxy', true);

app.use(
  morgan(
    `:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]  :response-time ms ":referrer" ":user-agent"`,
    {
      skip(req) {
        if (req.method === 'OPTIONS') {
          return true;
        }
        if (req.originalUrl === '/health') {
          return true;
        }
        return false;
      },
    },
  ),
);

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
app.use(mongoSanitize());

// GZIP compression
app.use(compression());

// Parsing cookie
app.use(cookieParser());

// CORS policy configuration
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

// view engine
const template = path.join(__dirname, './views', 'index.html');

app.get('/', function (req, res) {
  res.sendFile(template);
});

// ALB healthcheck
app.get('/health', function (req, res) {
  return res.status(200).send('ok');
});

app.use('/v1/api', v1Router);

app.all('*', (_, res) => {
  throw new NotFoundError('Resource not found on this server!!');
});

app.use(errorHandler);

export default app;
