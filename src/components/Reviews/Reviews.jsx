import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/Api';
import css from './Reviews.module.css'; // Importuj plik stylów

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        if (data && data.results) {
          setReviews(data.results);
        } else {
          setReviews([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={css.wrapper}>
      <h3 className={css.reviewHeader}>Reviews</h3>
      {reviews.length ? (
        <ul className={css.reviewList}>
          {reviews.map(review => (
            <li className={css.reviewListItem} key={review.id}>
              <h4 className={css.author}>Author: {review.author}</h4>
              <p className={css.review}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviewsText}>
          We don't have any reviews for this movie yet.
        </p>
      )}
    </div>
  );
};

export default Reviews;
