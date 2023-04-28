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
    res.render('error', {title: 'Something went wrong'})
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
    foundBook.reviews.splice(req.params.index, 1)
    await foundBook.save()

    res.redirect(`/books/${foundBook._id}`)
  } catch (error) {
    res.render('error', {title: 'Something went wrong'})
  }
}

module.exports = {
  create,
  delete: deleteReview
}
