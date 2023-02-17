import { useParams } from 'react-router-dom';
import { fetchAPI } from '../../requests';
import { useState, useEffect } from 'react';
import useQueryResult from '../../castomHooks/useQueryResult';

const Cast = () => {
  const { id } = useParams();
  const queryString = `movie/${id}/credits?`;

  const [queryResult, setqueryResult] = useQueryResult(queryString, 'cast');
  //  const [cast, setCast] = useState([]);

  //   useEffect(() => {
  //     async function getCast() {
  //       const t = `${id}/credits`;
  //       const { data } = await fetchAPI(t);
  //       const sortedActors = data.cast.sort((firstActor, secondActor) => {
  //         return secondActor.popularity - firstActor.popularity;
  //       });
  //       let array = [];
  //       for (let i = 1; i < 9; i += 1) {
  //         array.push(sortedActors[i]);
  //       }
  //       setCast(array);
  //     }
  //     getCast();
  //   }, []);
  console.log(queryResult);
  const actorsList = queryResult.map(
    ({ profile_path, name, character, cast_id }) => {
      return (
        <li key={cast_id}>
          <img src={profile_path} alt={`Profile photo of ${name}`}></img>
          <h3>{name}</h3>
          <p>
            <b>Character:</b> {character}
          </p>
        </li>
      );
    }
  );

  return <ul>{actorsList}</ul>;
};
export default Cast;
