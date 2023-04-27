//defining the home controller function
const Book = require('../models/book')

async function home(req, res) {

  try{
    const allBooks = await Book.find({})

    
    res.render('home', {title: 'Book Library', books: allBooks})

  } catch(error) {
    console.log(error)
  }

}

//export module
module.exports = {
  home,
  // show
}
