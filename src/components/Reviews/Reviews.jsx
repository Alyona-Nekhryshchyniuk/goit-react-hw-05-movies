import { useParams } from 'react-router-dom';
import { fetchAPI } from '../../requests';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getReviews() {
      const t = `${id}/reviews`;
      const { data } = await fetchAPI(t);
      setReviews(data.results);
    }
    getReviews();
  }, []);

  const reviewsItems = reviews.map(({ author, content, id }) => {
    return (
      <li key={id}>
        <p>
          <b>{author}</b>
        </p>
        <p>{content}</p>
      </li>
    );
  });

  return <ul>{reviewsItems}</ul>;
};
export default Reviews;
