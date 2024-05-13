import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import { fetchMovieByName } from '../services/Api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') || '';

    if (!query) return;

    const getMovie = async () => {
      try {
        const results = await fetchMovieByName(query);

        if (!results || results.length === 0) {
          toast.dismiss();
          toast.error('No movies found');
          setMovies([]); // Ustaw pustą tablicę, jeśli nie ma wyników
          return;
        }

        setMovies(results);
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };

    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <div>Movies Page</div>
      <SearchMovies onSubmit={handleSubmit} />
      <ul>
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </ul>
    </main>
  );
};

export default Movies;
