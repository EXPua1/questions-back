import Quiz from '../db/models/Quiz.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getQuizzes = async ({
  page = 1,
  perPage = 2,
  sortBy = '_id',
  sortOrder = 'asc',
  // filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;
  const quizezzQuery = Quiz.find();

  const quizezzCount = await Quiz.find().merge(quizezzQuery).countDocuments();
  const quizezz = await quizezzQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder });

  const paginationData = calculatePaginationData(quizezzCount, perPage, page);

  return {
    data: quizezz,
    ...paginationData,
  };
};

export const getQuizById = async (id) => {
  return await Quiz.findById(id);
};

export const createQuiz = async (payload) => {
  return await Quiz.create(payload);
};

export const updateQuiz = async (id, payload) => {
  const data = await Quiz.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });

  return data;
};

export const deleteQuiz = async (id) => {
  return await Quiz.findByIdAndDelete(id);
};

export const completedQuiz = async (id) => {
  const quiz = await Quiz.findByIdAndUpdate(
    { _id: id },
    { $inc: { completions: 1 } },
    { new: true, runValidators: true },
  );

  return quiz;
};
