import React from "react";

import { UseMovieContext } from "../Context/GlobalContext";
import * as actions from "../Context/ActionTypes";

const ResultCard = ({ movie }) => {
  const MovieContext = UseMovieContext();
  const storeMovieWatchlist = MovieContext.watchlist.find(
    (m) => m.imdbID === movie.imdbID
  );
  const storeMovieWatched = MovieContext.watched.find(
    (m) => m.imdbID === movie.imdbID
  );
  const WhatchlistDisabled = storeMovieWatchlist
    ? true
    : storeMovieWatched
    ? true
    : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-post"></div>
        )}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className="title">{movie.Title}</h3>
          {movie.Year ? <h4 className="release-date">{movie.Year}</h4> : "-"}
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={WhatchlistDisabled}
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHLIST,
                payload: movie,
              })
            }
          >
            Add to watchlist
          </button>
          <button
            className="btn"
            disabled={storeMovieWatched}
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
          >
            Add to watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
