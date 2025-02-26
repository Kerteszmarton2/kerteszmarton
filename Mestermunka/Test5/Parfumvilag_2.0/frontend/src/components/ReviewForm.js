// frontend/src/components/ReviewForm.js
import React, { useState } from 'react';
import axios from 'axios';

function ReviewForm({ perfumeId }) {
  const [scentTrail, setScentTrail] = useState(0);
  const [longevity, setLongevity] = useState(0);
  const [value, setValue] = useState(0);
  const [overallImpression, setOverallImpression] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/reviews/${perfumeId}`, {
        scent_trail_rating: scentTrail,
        longevity_rating: longevity,
        value_rating: value,
        overall_impression: overallImpression,
        review_text: reviewText
      }, {
        headers: {
          'x-auth-token': localStorage.getItem('token') // Ha van hitelesítési token
        }
      });
      console.log(response.data);
      setScentTrail(0);
      setLongevity(0);
      setValue(0);
      setOverallImpression(0);
      setReviewText('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h4>Scent Trail (1-5):</h4>
      <input type="number" min="1" max="5" value={scentTrail} onChange={(e) => setScentTrail(e.target.value)} required />
      <h4>Longevity (1-5):</h4>
      <input type="number" min="1" max="5" value={longevity} onChange={(e) => setLongevity(e.target.value)} required />
      <h4>Value (1-5):</h4>
      <input type="number" min="1" max="5" value={value} onChange={(e) => setValue(e.target.value)} required />
      <h4>Overall Impression (1-5):</h4>
      <input type="number" min="1" max="5" value={overallImpression} onChange={(e) => setOverallImpression(e.target.value)} required />
      <h4>Review Text:</h4>
      <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} required />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;