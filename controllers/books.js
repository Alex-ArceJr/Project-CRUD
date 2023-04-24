const Book = require('../models/book')


function newBook(req, res) {
  res.render('books/new', {title: 'Enter new book'})
}

async function create(req, res) {
  try {
    for(let key in req.body) {
      if(req.body[key] === '') delete req.body[key]
    }
    await Book.create(req.body)
    res.redirect('/books')
  } catch (error){
    console.log(error)
  }
}

async function index(req, res) {
  try {
    const allBooks = await Book.find({})

    res.render('books/index', {books: allBooks, title: 'All books'})
  } catch(error) {
    console.log(error)
  }
}

module.exports = {
  new: newBook,
  create,
  index
}
