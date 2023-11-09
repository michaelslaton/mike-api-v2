import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import * as middlewares from './utils/middlewares';
import remazonRouter from './api/remazon-prime/remazon.router';
// import MessageResponse from './interfaces/MessageResponse';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
// app.use(helmet());
app.use(cors());
app.use(express.json());

// app.get<{}, MessageResponse>('/', (req, res) => {
//   res.json({
//     message: 'this is a message',
//   });
// });

app.use('/remazon', remazonRouter);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;