import clsx from 'clsx';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import useQueryResult from '../../castomHooks/useQueryResult';
import css from './FilmDetails.module.css';

import { useCallback } from 'react';

const FilmDetails = ({ dataImg }) => {
  const { id } = useParams();
  const { queryResult } = useQueryResult(`movie/${id}?`, 'filmDetails');

  const location = useLocation();
  const navigate = useNavigate();

  const layout = useCallback(() => {
    const { poster_path, title, vote_average, overview, genres } = queryResult;

    return (
      <>
        <button
          className={css.backButton}
          onClick={() => {
            let prevPage = location.state.from;
            navigate(prevPage);
          }}
        >
          Go back
        </button>
        <section className={css.topDetails}>
          <div>
            <img
              alt=""
              src={`${dataImg.base_url}${dataImg.still_sizes[2]}${poster_path}`}
            />
          </div>
          <div className={css.nearPosterDetails}>
            <h2>{title}</h2>
            <p className={css.accentColor}>
              User score: {(vote_average * 10).toFixed()}%
            </p>
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
          <h3>Additional information</h3>
          <ul>
            <Link to="cast">
              <li className={clsx(css.underlined, css.accentColor)}>
                <b>Cast</b>
              </li>
            </Link>
            <Link to="reviews">
              <li className={clsx(css.underlined, css.accentColor)}>
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
  }, [queryResult, location, navigate, dataImg.base_url, dataImg.still_sizes]);

  return <>{typeof queryResult !== 'string' && layout()}</>;
};
export default FilmDetails;
