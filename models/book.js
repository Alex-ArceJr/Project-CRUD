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
    max: 5
  }
}, {
  timestamps: true
});

const bookSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true,
    enum: ['Fiction', 'Non-fiction', 'Mystery', 'Autobiography', 'Other']
  },
  author: {
    type: String,
    required: true
  },
  imgURL: {
    type: String,
    required: true
  },
  price: {
    type: Number
  },
  isbn: {
    type: Number
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema)
