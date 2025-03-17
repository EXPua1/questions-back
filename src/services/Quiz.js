import Quiz from '../db/models/Quiz.js';

export const getQuizzes = async (req, res) => {
  const data = await Quiz.find();

  return data;
};
