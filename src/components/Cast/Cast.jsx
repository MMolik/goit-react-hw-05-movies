// Cast.jsx

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/Api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={css.wrapper}>
      <h3 className={css.castHeader}>Cast</h3>
      {cast.length ? (
        <ul className={css.castList}>
          {cast.map(actor => (
            <li className={css.castListItem} key={actor.id}>
              {actor.profile_path ? (
                <img
                  className={css.castImage}
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  className={css.castImage}
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}
              <div className={css.castInfo}>
                <h3 className={css.castName}>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noCastText}>
          We don't have any information about the cast yet.
        </p>
      )}
    </div>
  );
};

export default Cast;