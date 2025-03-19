import Quiz from '../db/models/Quiz.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getQuizzes = async ({
  page = 1,
  perPage = 1,
  sortBy = '_id',
  sortOrder = 'desc',
  // filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  
  const sortFieldsMap = {
    _id: '_id',
    name: 'name',
    completions: 'completions',
    questions: 'questions', 
  };

  const normalizedSortBy = sortFieldsMap[sortBy] || '_id';
  const sortDirection = sortOrder === 'asc' ? 1 : -1;

  let quizezz;
  if (sortBy === 'questions') {
   
    quizezz = await Quiz.aggregate([
      {
        $addFields: {
          questionsLength: { $size: { $ifNull: ['$questions', []] } }, 
        },
      },
      { $sort: { questionsLength: sortDirection } },
      { $skip: skip },
      { $limit: limit },
      { $project: { questionsLength: 0 } }, 
    ]);
  } else {
    
    quizezz = await Quiz.find()
      .skip(skip)
      .limit(limit)
      .sort({ [normalizedSortBy]: sortOrder })
      .collation({ locale: 'en', strength: 2 });
  }

  const quizezzCount = await Quiz.countDocuments();
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
