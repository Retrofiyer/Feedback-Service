// services/feedbackService.js
const Feedback = require('../models/feedback');

const addFeedback = async (user, message) => {
  const feedback = {
    user,
    message,
    createdAt: new Date(),
  };
  return await Feedback.create(feedback);
};

const getAllFeedbacks = async () => {
  return await Feedback.findAll();
};

const getFeedbackById = async (id) => {
  return await Feedback.findById(id);
};

module.exports = {
  addFeedback,
  getAllFeedbacks,
  getFeedbackById,
};