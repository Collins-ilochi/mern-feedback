const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

// Create Feedback
router.post('/', async (req, res) => {
  const feedback = new Feedback(req.body);
  try {
    await feedback.save();
    res.status(201).send(feedback);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
