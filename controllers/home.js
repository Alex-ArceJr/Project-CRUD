//defining the home controller function
const Book = require('../models/book')

async function home(req, res) {

  try{
    const allBooks = await Book.find({})

    const genreFiction = await Book.find({genre: 'Fiction'})
    const genreNonfiction = await Book.find({genre: 'Non-fiction'})
    const genreMystery = await Book.find({genre: 'Mystery'})
    const genreAutobiography = await Book.find({genre: 'Autobiography'})
    const genreOther = await Book.find({genre: 'Other'})
    
    res.render('home', {title: 'Book Library', books: allBooks, fiction: genreFiction, nonfiction: genreNonfiction, mystery: genreMystery, autobio: genreAutobiography, other: genreOther})

  } catch(error) {
    console.log(error)
  }

}

// async function show(req, res) {
//   try {
//     const foundBook = await Book.findById(req.params.id)
//     res.redirect('home',{book: foundBook})

//   } catch(error) {
//     console.log(error)
//   }
// }

//export module
module.exports = {
  home,
  // show
}
