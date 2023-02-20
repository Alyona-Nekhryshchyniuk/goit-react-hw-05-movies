import { useParams } from 'react-router-dom';
import { useCallback } from 'react';

import useQueryResult from '../../castomHooks/useQueryResult';

const Cast = ({ dataImg }) => {
  const { id } = useParams();

  const { queryResult } = useQueryResult(`movie/${id}/credits?`, 'cast');

  const itemsCreate = useCallback(() => {
    return queryResult.map(({ profile_path, name, character, cast_id }) => (
      <li key={cast_id}>
        <img
          src={
            profile_path &&
            `${dataImg.base_url}${dataImg.profile_sizes[1]}${profile_path}`
          }
          alt={`Profile of ${name}`}
        ></img>
        <h3>{name}</h3>
        <p>
          <b>Character:</b> {character}
        </p>
      </li>
    ));
  }, [queryResult, dataImg.base_url, dataImg.profile_sizes]);

  return <ul>{typeof queryResult !== 'string' && itemsCreate()}</ul>;
};
export default Cast;
