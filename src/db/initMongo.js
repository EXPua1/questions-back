import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export const initMongo = async () => {
  try {
    const user = env('MONGODB_USER');
    const password = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority`,
    );

    console.log('MongoDB connected');
  } catch (error) {
    console.log(`Error connection Mongo ${error.messsage}`);
    throw error;
  }
};
