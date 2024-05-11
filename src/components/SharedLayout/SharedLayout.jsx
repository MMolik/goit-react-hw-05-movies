// SharedLayout.jsx

import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LoadingIndicator } from '../LoadingDots/LoadingDots';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        {' '}
        {/* Dodajemy klasę CSS */}
        <nav>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<LoadingIndicator />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;