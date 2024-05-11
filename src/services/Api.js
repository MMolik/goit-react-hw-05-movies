// Api.js

const API_KEY = 'a3f1f92507c0041bd10fd69d00819c73';

const fetchMovieById = async (movieId) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

const fetchMovieCast = async (movieId) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
  const data = await response.json();
  return data.cast;
};

const fetchMovieReviews = async (movieId) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

const fetchMovieTrailers = async (movieId) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

const fetchTrendMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

const fetchMovieByName = async (movieName) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}`);
  const data = await response.json();
  return data.results;
};

export {
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMovieTrailers,
  fetchTrendMovies,
  fetchMovieByName,
};
