import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import PerfumeCard from "../components/PerfumeCard";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (term) => {
    try {
      const response = await axios.get(`/api/perfumes?search=${term}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Search</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="perfume-list">
        {searchResults.map((perfume) => (
          <PerfumeCard key={perfume.id} perfume={perfume} />
        ))}
      </div>
    </div>
  );
};

export default Search;
