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
    options: [String], // Оптимизировано
    completions: {
      type: Number,
      default: 0,
    },
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
  questions: [QuestionSchema], // Используем вложенную схему
});

const Quiz = model('catalogs', QuizSchema);

export default Quiz;
