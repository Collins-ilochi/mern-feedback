const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  frequency: String,
  motivation: String,
  feature: String,
  improvement: String,
});

module.exports = mongoose.model('Feedback', feedbackSchema);
