// controllers/feedbackController.js
const feedbackService = require('../services/feedbackService');
const { successResponse, errorResponse } = require('../utils/responseHandler');

const postFeedback = async (req, res) => {
  try {
    const { user, message } = req.body;
    const feedbackId = await feedbackService.addFeedback(user, message);
    return successResponse(res, 'Feedback submitted successfully', { id: feedbackId });
  } catch (err) {
    return errorResponse(res, 'Failed to submit feedback', err.message);
  }
};

const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await feedbackService.getAllFeedbacks();
    return successResponse(res, 'Feedbacks retrieved successfully', feedbacks);
  } catch (err) {
    return errorResponse(res, 'Failed to retrieve feedbacks', err.message);
  }
};

const getFeedbackById = async (req, res) => {
  try {
    const feedback = await feedbackService.getFeedbackById(req.params.id);
    if (!feedback) {
      return errorResponse(res, 'Feedback not found', 'No feedback found with that ID');
    }
    return successResponse(res, 'Feedback retrieved successfully', feedback);
  } catch (err) {
    return errorResponse(res, 'Failed to retrieve feedback', err.message);
  }
};

module.exports = {
  postFeedback,
  getFeedbacks,
  getFeedbackById,
};