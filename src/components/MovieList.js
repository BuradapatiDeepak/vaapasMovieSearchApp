// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.key} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
