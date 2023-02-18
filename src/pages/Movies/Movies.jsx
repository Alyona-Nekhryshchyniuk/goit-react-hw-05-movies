import { fetchAPI } from '../../requests';
import { useState, useCallback } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [serchedMovies, setSerchedMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = e => {
    e.preventDefault();

    async function getCast() {
      const l = `search/movie?query=${searchQuery}&`;
      const { data } = await fetchAPI(l);
      setSerchedMovies(data.results);

      setSearchParams({ query: searchQuery });
    }
    getCast();
  };

  const filmsFound = useCallback(() => {
    return serchedMovies.map(({ id, title, release_date }) => (
      <Link to={`/movies/${id}`} key={id} state={{ from: location }}>
        <li>
          {' '}
          {title} {release_date && `(${release_date})`}
        </li>
      </Link>
    ));
  }, [serchedMovies]);

  return (
    <>
      <input
        type="search"
        onChange={({ target }) => setSearchQuery(target.value)}
      ></input>
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
      <ul>{serchedMovies && filmsFound()}</ul>
    </>
  );
};
export default Movies;
