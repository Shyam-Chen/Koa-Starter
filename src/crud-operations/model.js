import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

export default {
  List: mongoose.model('List', listSchema),
};
