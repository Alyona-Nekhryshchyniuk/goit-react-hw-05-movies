import { Link, useLocation } from 'react-router-dom';
import { memo } from 'react';

const SearchedList = ({ serchedMovies }) => {
  const location = useLocation();

  const filmsFound = () => {
    return serchedMovies.map(({ id, title, release_date }) => (
      <Link to={`/movies/${id}`} key={id} state={{ from: location }}>
        <li>
          {' '}
          {title} {release_date && `(${release_date})`}
        </li>
      </Link>
    ));
  };

  return <ul>{filmsFound()}</ul>;
};
export default memo(SearchedList);
