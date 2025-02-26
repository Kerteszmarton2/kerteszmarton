// frontend/src/pages/PerfumeDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PerfumeCard from '../components/PerfumeCard';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';

function PerfumeDetail({ match }) {
  const [perfume, setPerfume] = useState(null);

  useEffect(() => {
    const fetchPerfume = async () => {
      try {
        const response = await axios.get(`/api/perfumes/${match.params.id}`);
        setPerfume(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPerfume();
  }, [match.params.id]);

  if (!perfume) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <PerfumeCard perfume={perfume} />
      <ReviewForm perfumeId={perfume.id} />
      <ReviewList perfumeId={perfume.id} />
    </div>
  );
}

export default PerfumeDetail;