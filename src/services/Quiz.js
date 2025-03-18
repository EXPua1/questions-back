import Quiz from '../db/models/Quiz.js';

export const getQuizzes = async (req, res) => {
  return await Quiz.find();
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
 