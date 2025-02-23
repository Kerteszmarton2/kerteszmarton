import React from "react";

const PerfumeCard = ({ perfume }) => {
  return (
    <div className="perfume-card">
      <img src={perfume.image_url} alt={perfume.name} />
      <h3>{perfume.name}</h3>
      <p>Brand: {perfume.brand_id.name}</p>
      <p>Gender: {perfume.gender}</p>
      <p>Type: {perfume.type}</p>
      <p>Launch Year: {perfume.launch_year}</p>
      <p>Description: {perfume.description}</p>
    </div>
  );
};

export default PerfumeCard;
