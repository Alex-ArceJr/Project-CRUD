const express = require('express');
const router = express.Router();

const reviewsController = require('../controllers/reviews');


// POST looking to post review
router.post('/books/:id/reviews', reviewsController.create )

module.exports = router;
