//require mongoose
const mongoose = require('mongoose');
//setup the schema for our model
const Schema = mongoose.Schema;


const reviewSchema = new Schema ({
  content: {
    type: String
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  }
});

const bookSchema = new Schema ({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  imgURL: {
    type: String,
    required: true
  },
  price: {
    type: number
  },
  isbn: {
    type: number,
    required: true
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema)
