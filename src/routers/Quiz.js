import Router from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  completedQuizController,
  createQuizController,
  deleteQuizController,
  getQuizByIdController,
  getQuizesController,
  updateQuizController,
} from '../controllers/questions.js';
import { isValidId } from '../utils/isValid.js';

const quizRouter = Router();

quizRouter.get('/quizzes', ctrlWrapper(getQuizesController));
quizRouter.get('/quizzes/:id',isValidId, ctrlWrapper(getQuizByIdController));
quizRouter.post('/quizzes', ctrlWrapper(createQuizController));
quizRouter.put('/quizzes/:id', isValidId, ctrlWrapper(updateQuizController));
quizRouter.delete('/quizzes/:id', isValidId, ctrlWrapper(deleteQuizController));
quizRouter.post('/quizzes/:id/complete', isValidId, ctrlWrapper(completedQuizController));


export default quizRouter;
