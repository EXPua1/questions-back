import Quiz from '../db/models/Quiz.js';

export const getQuizzes = async (req, res) => {
  return await Quiz.find();
};

export const getQuizById = async (id) => {
  return await Quiz.findById(id);
};
