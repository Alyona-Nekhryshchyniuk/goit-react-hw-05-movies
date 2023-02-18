import { fetchAPI } from '../../requests';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [serchedMovies, setSerchedMovies] = useState([]);

  const onSubmit = e => {
    e.preventDefault();

    async function getCast() {
      const l = `search/movie?query=${searchQuery}/`;
      const { data } = await fetchAPI(l);

      setSerchedMovies(data);
    }
    getCast();
    console.log(serchedMovies);
  };

  return (
    <>
      <input
        type="search"
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
      ></input>
      <button onClick={onSubmit}>Search</button>
      {/* <ul>{items}</ul> */}
    </>
  );
};
export default Movies;
