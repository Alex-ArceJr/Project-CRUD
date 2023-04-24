const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books')

//GET /books/new
router.get('/new', booksController.new)


// Get /book
router.get('/', booksController.index)


module.exports = router
