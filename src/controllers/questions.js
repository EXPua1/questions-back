import { sortByList } from '../db/models/Quiz.js';
import {
  getQuizById,
  getQuizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  completedQuiz,
} from '../services/Quiz.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export const getQuizesController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query, sortByList);

  const data = await getQuizzes({
    page,
    perPage:5,
    sortBy,
    sortOrder,
    // filter,
  });

  if (data.data.length === 0) {
    res.status(404).json({
      status: 404,
      message: 'Quizes not found',
    });
  }

  return res.status(200).json({
    status: 200,
    data: data,
    message: 'success',
  });
};

export const getQuizByIdController = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const quiz = await getQuizById(id);

  if (!quiz) {
    return res.status(404).json({
      status: 404,
      message: 'Quiz not found',
    });
  }

  return res.status(200).json({
    status: 200,
    data: quiz,
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
  });
};

export const completedQuizController = async (req, res) => {
  const { id } = req.params;

  const data = await completedQuiz(id);

  return res.status(200).json({
    status: 200,
    data,
  });
};
