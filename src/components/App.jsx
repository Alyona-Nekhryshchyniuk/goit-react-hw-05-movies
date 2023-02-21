import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import useQueryResult from '../castomHooks/useQueryResult';

const FilmDetails = lazy(() => import('./FilmDetails/FilmDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const App = () => {
  const { queryResult } = useQueryResult(`configuration?`, 'imgAPISizes');
  const dataImg = {
    base_url: queryResult.secure_base_url,
    poster_sizes: queryResult.poster_sizes,
    profile_sizes: queryResult.profile_sizes,
    still_sizes: queryResult.still_sizes,
  };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>

        <Route path="/Movies/:id" element={<FilmDetails dataImg={dataImg} />}>
          <Route path="cast" element={<Cast dataImg={dataImg} />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
