//defining the home controller function

function home(req, res) {
  res.render('home', {title: 'Book Library'})
}

//export module
module.exports = {
  home
}
