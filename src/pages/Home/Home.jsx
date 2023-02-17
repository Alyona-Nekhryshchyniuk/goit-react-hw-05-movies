import { fetchAPI } from '../../requests';
import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ trendings, settrendings }) => {
  useEffect(() => {
    async function getFilmslist() {
      const { data } = await fetchAPI('week', 'trending');
      settrendings(data.results);
    }
    getFilmslist();
  }, []);

  const itemGenerate = useCallback(() => {
    return trendings.map(({ title, id }) => (
      <Link to={`/movies/${id}`} key={id}>
        <li>{title}</li>
      </Link>
    ));
  }, [trendings]);

  const items = itemGenerate();
  return (
    <>
      <h2>Home</h2>
      <>{items}</>
    </>
  );
};
export default Home;
