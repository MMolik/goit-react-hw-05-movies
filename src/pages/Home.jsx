import React, { useState, useEffect } from 'react';
import { fetchTrendMovies } from '../services/Api';
import MovieList from '../components/MovieList/MovieList'; // Importujemy MovieList

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const trendingMoviesData = await fetchTrendMovies();
      setTrendingMovies(trendingMoviesData);
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      <MovieList trendingMovies={trendingMovies} />
    </div>
  );
};

export default Home;
