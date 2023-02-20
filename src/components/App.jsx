import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import FilmDetails from './FilmDetails/FilmDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFound from '../pages/NotFound';
import SharedLayout from './SharedLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>

        <Route path="/Movies/:id" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
