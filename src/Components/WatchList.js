import { UseMovieContext } from "../Context/GlobalContext";

import MovieCard from "./MovieCard";

import "./WatchList.css";

const WatchList = () => {
  const movieContext = UseMovieContext();
  return (
    <div className="watch-list">
      <div className="container">
        <div className="main-heading">
          <h1>My Watchlist</h1>
          <span className="movies-count">
            {movieContext.watchlist.length}{" "}
            {movieContext.watched.length <= 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {movieContext.watchlist.length > 0 ? (
          <div className="movie-grid">
            {movieContext.watchlist.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Movies in your list , add some!</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
