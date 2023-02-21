import { useState, useEffect } from 'react';
import { fetchAPI } from '../requests';

const useQueryResult = (queryPart, type) => {
  const [queryResult, setqueryResult] = useState(queryPart, type);
  useEffect(() => {
    async function get() {
      try {
        const { data } = await fetchAPI(queryPart);

        let finalRusult = [];

        switch (type) {
          case 'cast':
            const sortedActors = data.cast.sort((firstActor, secondActor) => {
              return secondActor.popularity - firstActor.popularity;
            });
            let array = [];
            for (let i = 1; i < 9; i += 1) {
              array.push(sortedActors[i]);
            }
            finalRusult = array;
            break;

          case 'movies':
          case 'filmDetails':
            finalRusult = data;
            break;

          case 'home':
          case 'reviews':
            finalRusult = data.results;
            break;

          case 'imgAPISizes':
            finalRusult = data.images;
            break;

          default:
            finalRusult = data;
            break;
        }

        setqueryResult(finalRusult);
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, [queryPart, type]);

  return { queryResult, setqueryResult };
};
export default useQueryResult;
