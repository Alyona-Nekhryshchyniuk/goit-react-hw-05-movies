import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import useQueryResult from '../../castomHooks/useQueryResult';

import { useCallback } from 'react';

const FilmDetails = () => {
  const { id } = useParams();
  const { queryResult } = useQueryResult(`movie/${id}?`, 'filmDetails');
  const location = useLocation();
  const navigate = useNavigate();

  const layout = useCallback(() => {
    const { poster_path, title, vote_average, overview, genres } = queryResult;
    return (
      <>
        <button
          onClick={() => {
            let prevPage = location.state.from.pathname;

            navigate(prevPage);
          }}
        >
          Go back
        </button>
        <section>
          <div>
            <img alt="film poster" src={poster_path} />
            <h2>{title}</h2>
            <p>User score: {(vote_average * 10).toFixed()}%</p>
            <h3>Overview</h3>
            <p> {overview}</p>
            <h3>Genres</h3>
            <p>
              {Boolean(genres) &&
                genres
                  .map(({ name }) => {
                    return name;
                  })
                  .join(' ')}
            </p>
          </div>
        </section>
        <section>
          <h2>Additional information</h2>
          <ul>
            <Link to="cast">
              <li>
                <b>Cast</b>
              </li>
            </Link>
            <Link to="reviews">
              <li>
                <b>Reviews</b>
              </li>
            </Link>
          </ul>
        </section>
        <section>
          <Outlet />
        </section>
      </>
    );
  }, [queryResult]);

  return <>{typeof queryResult !== 'string' && layout()}</>;
};
export default FilmDetails;
