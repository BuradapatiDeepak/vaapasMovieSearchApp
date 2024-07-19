// src/components/MovieCard.js
import React, { useState, useEffect } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);
      } catch (err) {
        console.error('Failed to fetch dog image', err);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div className="movie-card">
      <img src={dogImage} alt="Random Dog" className="movie-image" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-author">{movie.author_name ? movie.author_name.join(', ') : 'Unknown Author'}</p>
        <p className="movie-year">{movie.first_publish_year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
