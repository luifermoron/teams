import path from 'path';
import  dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '..', '.env') });

import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
const app = express();
import routes from './infrastructure/express/routes';
const { scopePerRequest, loadControllers } = require('awilix-express');
const cors = require('cors');

import container from './infrastructure/awilix/container';
import CORS_OPTIONS from './infrastructure/express/middlewares/cors';


app.use(helmet());

app.disable('x-powered-by');

app.use(cors(CORS_OPTIONS));

// Remove or change the X-Powered-By header
app.use((req: Request, res: Response, next: NextFunction) => {
  res.removeHeader('X-Powered-By');
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use(scopePerRequest(container));
app.use(loadControllers('../src/infrastructure/express/routes/teams/**-**/**-**.**', { cwd: __dirname }));
routes(app);

export default app;