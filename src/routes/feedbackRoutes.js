// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/feedbackController');

router.post('/feedback', feedbackController.postFeedback);
router.get('/feedback', feedbackController.getFeedbacks);
router.get('/feedback/:id', feedbackController.getFeedbackById);

module.exports = router;