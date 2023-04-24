const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books')

//GET /books/new
router.get('/new', booksController.new)


// Get /books
router.get('/', booksController.index)

//POST /books
router.post('/', booksController.create)


module.exports = router
