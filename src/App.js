// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Spinner from './components/Spinner';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await response.json();
      setMovies(data.docs);
    } catch (err) {
      setError('Failed to fetch movie data. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
