import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/Api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data || []); // Zapobiegamy próbie odczytu właściwości z null lub undefined
      } catch (error) {
        console.log(error);
      }
    };

    fetchCastData();
  }, [movieId]);

  return (
    <div className={css.mainCast}>
      <h3 className={css.castHeader}>Cast</h3>
      {cast.length > 0 ? ( // Sprawdzamy, czy cast jest zdefiniowany i ma długość większą od zera
        <ul className={css.castList}>
          {cast.map(actor => (
            <li className={css.castListItem} key={actor.id}>
              {actor.profile_path ? ( // Sprawdzamy, czy profile_path jest zdefiniowany
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
          ))}x
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
