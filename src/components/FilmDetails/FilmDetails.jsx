import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchAPI } from '../../requests';

import { useState, useEffect } from 'react';

const FilmDetails = () => {
  const [filmDetails, setFilmDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getFilmDetails() {
      const { data } = await fetchAPI(id);

      setFilmDetails(data);
    }
    getFilmDetails();
  }, [id]);

  return (
    <>
      <section>
        <div>
          <img alt="film poster" src={filmDetails.poster_path} />
          <h2>{filmDetails.title}</h2>
          <p>User score: {(filmDetails.vote_average * 10).toFixed()}%</p>
          <h3>Overview</h3>
          <p> {filmDetails.overview}</p>
          <h3>Genres</h3>
          <p>
            {Boolean(filmDetails.genres) &&
              filmDetails.genres
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
};
export default FilmDetails;
