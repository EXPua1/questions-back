import {
  getQuizById,
  getQuizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from '../services/Quiz.js';

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
  console.log(id);
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

export const createQuizController = async (req, res) => {
  const data = await createQuiz(req.body);

  return res.status(201).json({
    status: 201,
    data,
    message: 'success',
  });
};

export const updateQuizController = async (req, res) => {
  const { id } = req.params;

  const data = await updateQuiz(id, req.body);

  return res.status(200).json({
    status: 200,
    data,
    message: 'successfully updated',
  });
};

export const deleteQuizController = async (req, res) => {
  const { id } = req.params;

  const data = await deleteQuiz(id);

  return res.status(200).json({
    status: 200,
    data,
  })
};