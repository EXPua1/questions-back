import express from 'express';
import cors from 'cors';
import { env } from './src/utils/env.js';
import { notFoundHandler } from './src/middlewares/notFoundHandler.js';
import { errorHandler } from './src/middlewares/errorHandler.js';
import { logger } from './src/middlewares/logger.js';
import quizRouter from './src/routers/Quiz.js';


export const startServer = () => {
  const app = express();
  app.use(logger);
  app.use(cors());
  app.use(express.json());

  app.use('/api', quizRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  const port = env('PORT');
  app.listen(port, () => console.log(`Server running on ${port} port`));
};
