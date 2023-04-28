const express = require('express');
const router = express.Router();

const reviewsController = require('../controllers/reviews');


// POST looking to post review
router.post('/books/:id/reviews', reviewsController.create)

// DELETE lookin to delete reviews
router.delete('/books/:id/reviews/:index', reviewsController.delete)

module.exports = router;
