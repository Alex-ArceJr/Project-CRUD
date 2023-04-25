const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books')

//GET /books/new
router.get('/new', booksController.new)


// Get /books
router.get('/', booksController.index)

//POST /books
router.post('/', booksController.create)

//PUT /books/:id

//GET /:id/edit

router.get('/:id/edit', booksController.edit)

router.put('/:id', booksController.update)

// Get /books/:id

router.get('/:id', booksController.show)


module.exports = router
