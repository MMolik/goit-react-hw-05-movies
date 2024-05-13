import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from '../components/MovieList/MovieList.module.css';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import { fetchMovieByName } from '../services/Api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') || ''; // Changed ?? to || to handle empty query string

    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchMovieByName(query);

        if (results.length === 0) {
          toast.dismiss();
          toast.error('No movies found');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };

    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    if (!query) {
      toast.error('Please enter something');
      return;
    }
    setSearchParams({ query });
  };

  return (
    <main>
      <div className={css.sectionTitle}>Movies Page</div>
      <SearchMovies onSubmit={handleSubmit} />
      <ul className={css.list}>
        {movies.map(movie => (
          <li className={css.listItem} key={movie.id}>
            <Link
              className={css.linkItem}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
