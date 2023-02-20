import { Link, useLocation } from 'react-router-dom';
import useQueryResult from '../../castomHooks/useQueryResult';

const Home = () => {
  const location = useLocation();
  const { queryResult } = useQueryResult('trending/movie/week?', 'home');

  const itemGenerate = () => {
    return queryResult.map(({ title, id }) => (
      <Link to={`/movies/${id}`} key={id} state={{ from: location }}>
        <li>{title}</li>
      </Link>
    ));
  };

  return (
    <>
      <h2>Trending today</h2>
      <>
        <ul>{typeof queryResult !== 'string' && itemGenerate()}</ul>
      </>
    </>
  );
};
export default Home;
