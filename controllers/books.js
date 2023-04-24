const Book = require('../models/book')


function newBook(req, res) {
  res.render('books/new', {title: 'Enter new book'})
}

async function create(req, res) {
  try {

  } catch (error){
    console.log(error)
  }
}


module.exports = {
  new: newBook,
  create
}
