import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org';

const KEY = '028e3a4fd5d405b3bc762da96bd46a36';

export function fetchAPI(queryPart) {
  return axios.get(`/3/${queryPart}api_key=${KEY}`);
}
