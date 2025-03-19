import { Schema, model } from 'mongoose';

const QuestionSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['text', 'single', 'multiple'],
    },
    text: {
      type: String,
      required: true,
    },
    options: [String],
  },
  { _id: false },
);

const QuizSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [QuestionSchema],
  completions: {
    type: Number,
    default: 0,
  },
});



export const sortByList = [
  '_id',
  'name',
  'completions',
]

const Quiz = model('catalogs', QuizSchema);

export default Quiz;
