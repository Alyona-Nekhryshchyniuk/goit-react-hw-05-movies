import { useParams } from 'react-router-dom';
import { useCallback } from 'react';
import useQueryResult from '../../castomHooks/useQueryResult';

const Reviews = () => {
  // const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  const { queryResult } = useQueryResult(`movie/${id}/reviews?`, 'reviews');
  // useEffect(() => {
  //   async function getReviews() {
  //     const t = `${id}/reviews`;
  //     const { data } = await fetchAPI(t);
  //     setReviews(data.results);
  //   }
  //   getReviews();
  // }, []);
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
