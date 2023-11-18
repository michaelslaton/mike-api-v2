import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import * as middlewares from './utils/middlewares';
import remazonRouter from './api/remazon-prime/remazon.router';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
// app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message1: `Welcome to Mike Slaton's all purpose API!`,
    message2: `You probably shouldn't be here!`,
    message3: `Have a nice day!`,
  });
});

app.use('/remazon', remazonRouter);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;