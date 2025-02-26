// frontend/src/components/ReviewList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReviewList({ perfumeId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/reviews?perfume_id=${perfumeId}`);
        setReviews(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReviews();
  }, [perfumeId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map(review => (
        <div key={review.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h4>User: {review.user_id.name}</h4>
          <p>Intensity: {review.intensity_rating}</p>
          <p>Value: {review.value_rating}</p>
          <p>Scent Trail: {review.scent_trail_rating}</p>
          <p>Overall: {review.overall_rating}</p>
          <p>Review Text: {review.review_text}</p>
          <p>Created At: {new Date(review.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;