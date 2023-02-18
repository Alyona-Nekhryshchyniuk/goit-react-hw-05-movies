import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org';
// const requests = () => {
const KEY = '028e3a4fd5d405b3bc762da96bd46a36';

export function fetchAPI(queryPart) {
  return axios.get(`/3/${queryPart}api_key=${KEY}`);
}

// `/3/${type}/movie/${routeDetail}?api_key=${KEY}`;
