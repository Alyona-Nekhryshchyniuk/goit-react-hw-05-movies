import { fetchAPI } from '../../requests';
import { useState, useEffect, memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchedList from 'components/SearchedList/SearchedList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [serchedMovies, setSerchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('query');

  useEffect(() => {
    async function getCast() {
      const { data } = await fetchAPI(`search/movie?query=${q}&`);
      setSerchedMovies(data.results);
    }

    getCast();
  }, [q]);

  const onSubmit = e => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <>
      <input
        type="search"
        onChange={({ target }) => setSearchQuery(target.value)}
      ></input>
      <button onClick={onSubmit}>Search</button>
      {q && <SearchedList serchedMovies={serchedMovies} />}
    </>
  );
};
export default memo(Movies);
