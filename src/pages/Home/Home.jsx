import { fetchAPI } from '../../requests';
import { useEffect, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import useQueryResult from '../../castomHooks/useQueryResult';

const Home = () => {
  const { queryResult } = useQueryResult('trending/movie/week?', 'home');

  const itemGenerate = useCallback(() => {
    return queryResult.map(({ title, id }) => (
      <Link to={`/movies/${id}`} key={id}>
        <li>{title}</li>
      </Link>
    ));
  }, [queryResult]);

  return (
    <>
      <h2>Home</h2>
      <>{typeof queryResult !== 'string' && itemGenerate()}</>
    </>
  );
};
export default Home;
