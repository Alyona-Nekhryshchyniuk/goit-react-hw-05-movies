import { Route, Routes, NavLink } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import FilmDetails from './FilmDetails/FilmDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="/Movies/:id" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
