import React, { useState } from 'react';
import axios from 'axios';

function ReviewForm({ perfumeId }) {
  const [intensity, setIntensity] = useState(0);
  const [value, setValue] = useState(0);
  const [scentTrail, setScentTrail] = useState(0);
  const [overall, setOverall] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/reviews/${perfumeId}`, {
        intensity_rating: intensity,
        value_rating: value,
        scent_trail_rating: scentTrail,
        overall_rating: overall,
        review_text: reviewText
      }, {
        headers: {
          'x-auth-token': localStorage.getItem('token') // Ha van hitelesítési token
        }
      });
      console.log(response.data);
      setIntensity(0);
      setValue(0);
      setScentTrail(0);
      setOverall(0);
      setReviewText('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h4>Intensity (1-5):</h4>
      <input type="number" min="1" max="5" value={intensity} onChange={(e) => setIntensity(e.target.value)} required />
      <h4>Value (1-5):</h4>
      <input type="number" min="1" max="5" value={value} onChange={(e) => setValue(e.target.value)} required />
      <h4>Scent Trail (1-5):</h4>
      <input type="number" min="1" max="5" value={scentTrail} onChange={(e) => setScentTrail(e.target.value)} required />
      <h4>Overall (1-5):</h4>
      <input type="number" min="1" max="5" value={overall} onChange={(e) => setOverall(e.target.value)} required />
      <h4>Review Text:</h4>
      <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} required />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;