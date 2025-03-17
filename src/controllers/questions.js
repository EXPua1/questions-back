import { getQuizById, getQuizzes } from '../services/Quiz.js';

export const getQuizesController = async (req, res) => {
  const data = await getQuizzes();
  return res.status(200).json({
    status: 200,
    data,
    message: 'success',
  });
};

export const getQuizByIdController = async (req, res) => {
  const { id } = req.params;
  const quiz = await getQuizById(id); // Предполагаем, что возвращается объект, а не массив

  if (!quiz) {
    return res.status(404).json({
      status: 404,
      message: 'Quiz not found',
    });
  }

  return res.status(200).json({
    status: 200,
    data: quiz, // Возвращаем объект напрямую, а не массив
    message: 'success',
  });
};
