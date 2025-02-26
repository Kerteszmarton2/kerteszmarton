// backend/routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware'); // Ha van hitelesítési middleware

// Get all reviews
router.get('/', reviewController.getAllReviews);

// Get review by ID
router.get('/:id', reviewController.getReviewById);

// Create a new review
router.post('/:id', authMiddleware, reviewController.createReview);

// Update a review
router.put('/:id', authMiddleware, reviewController.updateReview);

// Delete a review
router.delete('/:id', authMiddleware, reviewController.deleteReview);

module.exports = router;