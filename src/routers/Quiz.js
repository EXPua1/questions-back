import Router from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getQuizesController } from '../controllers/questions.js';


const quizRouter = Router();

quizRouter.get('/quizzes', ctrlWrapper(getQuizesController));

export default quizRouter;