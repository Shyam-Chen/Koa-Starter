import mongoose from 'mongoose';

export default {
  List: mongoose.model(
    'List',
    new mongoose.Schema({
      text: {
        type: String,
        required: true,
      },
    }),
  ),
};
