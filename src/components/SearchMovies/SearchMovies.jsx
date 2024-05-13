import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const queryInput = e.target.querySelector('input[name="query"]');
    const query = queryInput ? queryInput.value.trim() : '';

    if (!query) {
      toast.error('Please enter something');
      return;
    }

    onSubmit(query);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="query"
        type="text"
        placeholder="Search movies"
      />
      <button type="submit">
        Search
      </button>
    </form>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchMovies;
