import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ trailerKey, onClose }) => {
  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modal}>
        <iframe
          className={css.modalPlayer}
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
          title="Trailer"
          allowFullScreen
          autoPlay={true}
        />
        <button className={css.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  trailerKey: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;