import Router from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getQuizByIdController,
  getQuizesController,
} from '../controllers/questions.js';

const quizRouter = Router();

quizRouter.get('/quizzes', ctrlWrapper(getQuizesController));
quizRouter.get('/quizzes/:id', ctrlWrapper(getQuizByIdController));

export default quizRouter;
