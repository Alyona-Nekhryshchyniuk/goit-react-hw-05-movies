import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org';
// const requests = () => {
const KEY = '028e3a4fd5d405b3bc762da96bd46a36';
/* https://api.themoviedb.org/3/movie/550?
      api_key=028e3a4fd5d405b3bc762da96bd46a36 */

export function fetchAPI() {
  async function query() {
    const res = await axios.get(`/3/trending/movie/week?api_key=${KEY}`);
    return res;
  }
  const result = query().then(({ data }) => {
    console.log(data.results);
    return data.results;

    //   console.log(filmList);
    //   return filmList.map(({ title, id }) => <li key={id}>{title}</li>);
  });
  return result;
}
