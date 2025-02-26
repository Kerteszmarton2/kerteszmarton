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
    <div className="review-list">
      <h2>Reviews</h2>
      {reviews.map(review => (
        <div key={review.id} className="review-item">
          <h4>User: {review.user_id.name}</h4>
          <p>Scent Trail: {review.scent_trail_rating}</p>
          <p>Longevity: {review.longevity_rating}</p>
          <p>Value: {review.value_rating}</p>
          <p>Overall Impression: {review.overall_impression}</p>
          <p>Review Text: {review.review_text}</p>
          <p>Created At: {new Date(review.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;