import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header>
        <div className={css.container}>
          <nav>
            <NavLink className={css.headerLink} to="/">
              Home
            </NavLink>
            <NavLink className={css.headerLink} to="/Movies">
              Movies
            </NavLink>
          </nav>
        </div>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={css.container}>
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};
export default SharedLayout;
