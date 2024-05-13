import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieTrailers } from '../../services/Api';
import Modal from '../Modal/Modal';
import css from './Trailers.module.css';

const Trailers = () => {
  const { movieId } = useParams();
  const [trailers, setTrailers] = useState([]);
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const [loading, setLoading] = useState(true); // Dodajemy stan do obsługi ładowania

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const { results } = await fetchMovieTrailers(movieId);
        setTrailers(results);
        setLoading(false); // Ustawiamy stan na false po pobraniu zwiastunów
      } catch (error) {
        console.log(error);
        setLoading(false); // W przypadku błędu ustawiamy stan na false
      }
    };

    fetchTrailers();
  }, [movieId]);

  const handleTrailerClick = trailerKey => {
    setSelectedTrailer(trailerKey);
  };

  const handleCloseModal = () => {
    setSelectedTrailer(null);
  };

  if (loading) { // Jeśli dane są ładowane, zwracamy komunikat o ładowaniu
    return <p>Loading...</p>;
  }

  return (
    <div className={css.wrapper}>
      <h3 className={css.trailerHeader}>Trailers</h3>
      <div className={css.trailerContainer}>
        {trailers.length ? (
          trailers.map(trailer => (
            <div key={trailer.id} className={css.trailerItem}>
              <button
                className={css.trailerButton}
                onClick={() => handleTrailerClick(trailer.key)}
              >
                {trailer.name}
              </button>
            </div>
          ))
        ) : (
          <p className={css.noTrailersText}>No trailers available</p>
        )}
      </div>
      {selectedTrailer && (
        <Modal trailerKey={selectedTrailer} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Trailers;
