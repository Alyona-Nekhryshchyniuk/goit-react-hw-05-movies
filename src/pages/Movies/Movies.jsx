import { fetchAPI } from '../../requests';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [serchedMovies, setSerchedMovies] = useState([]);

  const onSubmit = e => {
    e.preventDefault();

    // async function getCast() {
    //   const t = `${id}/credits`;
    //   const { data } = await fetchAPI(t);

    //   setSerchedMovies(data);
    // }
    // getCast();
  };

  return (
    <>
      <input
        type="search"
        onChange={({ target }) => setSearchQuery(target.value)}
      ></input>
      <button onClick={onSubmit}>Search</button>
      {/* <ul>{items}</ul> */}
    </>
  );
};
export default Movies;
