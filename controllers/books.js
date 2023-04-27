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
    res.render('error', {title: 'Something went wrong'})
  }
}

async function edit(req, res){
  try {

    const findBook = await Book.findOne({_id: req.params.id})
    console.log(findBook)
    res.render(`books/edit`, {title: 'Update Book', book: findBook})
  } catch (error) {
    console.log(error)
    res.render('error', {title: 'Something went wrong'})
  }
}

async function update(req,res){
  try {
    const updateBook = await Book.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    await updateBook.save()
    // // console.log(updateBook)
    //  await update(req.body)

    res.redirect(`/books/${updateBook._id}`)

  } catch (error) {
    console.log(error)
    res.render('error', {title: 'Something went wrong'})
  }
}

async function index(req, res) {
  try {
    const allBooks = await Book.find({})

    res.render('books/index', {books: allBooks, title: 'All books'})
  } catch(error) {
    console.log(error)
    res.render('error', {title: 'Something went wrong'})
  }
}

async function deleteBook(req, res) {
  try {
    const findBook = await Book.findOneAndDelete({_id: req.params.id});

    res.redirect('/books')
  } catch(error) {
    console.log(error)
    res.render('error', {title: 'Something went wrong'})
  }
}

async function show(req, res) {
  try {
    const foundBook = await Book.findById(req.params.id)
    res.render('books/show',{book: foundBook, title: 'See Book Details'})

  } catch(error) {
    console.log(error)
    res.render('error', {title: 'Something went wrong'})
  }
}

module.exports = {
  new: newBook,
  create,
  index,
  show,
  update,
  edit,
  delete: deleteBook
}
