import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    minLenght: 2,
    maxLenght: 100,
  },
  description: {
    type: String,
    required: true,
    minLenght: 2,
    maxLenght: 400,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Category = mongoose.model('category', categorySchema);

export default Category;
