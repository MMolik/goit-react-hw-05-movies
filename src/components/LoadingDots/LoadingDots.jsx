// LoadingDots.jsx

import React from 'react';
import css from './LoadingDots.module.css';

export const LoadingIndicator = () => {
  return (
    <div className={css.loadingDots}>
      <div className={css.dot} style={{ animationDelay: '0s' }} />
      <div className={css.dot} style={{ animationDelay: '.2s' }} />
      <div className={css.dot} style={{ animationDelay: '.4s' }} />
    </div>
  );
};

export default LoadingIndicator; // Eksportuj LoadingIndicator jako domyślny
