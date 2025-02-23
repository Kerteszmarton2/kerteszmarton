import React, { useEffect, useState } from "react";
import axios from "axios";
import PerfumeCard from "../components/PerfumeCard";

const Home = () => {
  const [featuredPerfumes, setFeaturedPerfumes] = useState([]);

  useEffect(() => {
    const fetchFeaturedPerfumes = async () => {
      try {
        const response = await axios.get("/api/featured-perfumes");
        setFeaturedPerfumes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFeaturedPerfumes();
  }, []);

  return (
    <div className="container">
      <h1>Featured Perfumes</h1>
      <div className="perfume-list">
        {featuredPerfumes.map((perfume) => (
          <PerfumeCard key={perfume.id} perfume={perfume.perfume_id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
