import { Schema, model } from 'mongoose';

// Основная схема для викторины
const QuizSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      options: [
        {
          type: String,
        },
      ], // Только если есть опции (для single или multiple)
      completions: {
        type: Number,
        default: 0,
      },
    },
  ],
});

const Quiz = model('catalogs', QuizSchema);

export default Quiz;
