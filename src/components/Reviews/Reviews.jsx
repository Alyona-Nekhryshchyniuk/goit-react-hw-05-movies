import { useParams } from 'react-router-dom';
import { useCallback } from 'react';
import useQueryResult from '../../castomHooks/useQueryResult';

const Reviews = () => {
  const { id } = useParams();

  const { queryResult } = useQueryResult(`movie/${id}/reviews?`, 'reviews');

  const itemCreate = useCallback(() => {
    return queryResult.map(({ author, content, id }) => (
      <li key={id}>
        <p>
          <b>{author}</b>
        </p>
        <p>{content}</p>
      </li>
    ));
  }, [queryResult]);

  return <ul>{typeof queryResult !== 'string' && itemCreate()}</ul>;
};
export default Reviews;
