const Book = require('../models/book');
const mongoose = require('mongoose')

async function create(req, res) {
  try {
    const foundBook = await Book.findById(req.params.id)
    foundBook.reviews.push(req.body)
    await foundBook.save()
    res.redirect(`/books/${foundBook._id}`)

  } catch (error) {
    console.log(error)
  }
}

// function deleteOne(id) {
//   id = parseInt(id);
//   const idx = Book.findIndex(book => book.id === id);
//   Book.splice(idx, 1);
// }

async function deleteReview(req, res) {
  try {
    const foundBook = await Book.findById(req.params.id).populate('reviews')
    const reviews = foundBook.reviews
    // const idx = reviews.findIndex(review => review._id === new mongoose.Types.ObjectId(req.params.reviewid))
    console.log(reviews)
    console.log(req.params.index)
    // console.log(idx)
    // console.log(review._id)
    foundBook.reviews.splice(req.params.index, 1)
    // console.log(foundBook)
    await foundBook.save()

    res.redirect(`/books/${foundBook._id}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  create,
  delete: deleteReview
}
