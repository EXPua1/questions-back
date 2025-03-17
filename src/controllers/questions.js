import { getQuizzes } from '../services/Quiz.js';

export const getQuizesController = async (req, res) => {
  const data = await getQuizzes();
  return res.status(200).json({
    status: 200,
    data,
    message: 'success',
  });
};
