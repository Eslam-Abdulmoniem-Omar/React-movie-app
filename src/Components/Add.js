import React, { useEffect, useState } from "react";

import "./Add.css";
import MovieCard from "./ResultCard";
import axios from "axios";

function Add() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=d2343eb`)
      .then((res) => {
        if (res.data.Search) {
          setMovies(res.data.Search);
        }
      })
      .catch((error) => console.error("error ya bro"));
  }, [searchValue]);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-container">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search for a movie"
              value={searchValue}
            />
          </div>
          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.imdbID}>
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Add;
