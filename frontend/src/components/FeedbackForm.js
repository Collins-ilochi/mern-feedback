import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    frequency: '',
    motivation: '',
    feature: '',
    improvement: ''
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/feedback', feedback);
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error('There was an error submitting the feedback!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>How often do you use our app?</label>
        <input type="text" name="frequency" value={feedback.frequency} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>What is the motivation to use our app?</label>
        <input type="text" name="motivation" value={feedback.motivation} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>What is your most used feature?</label>
        <input type="text" name="feature" value={feedback.feature} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>What would you like to see improved the most?</label>
        <input type="text" name="improvement" value={feedback.improvement} onChange={handleChange} />
      </div>
      <button type="submit" className="submit-btn">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;