import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/bookstoreApi';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const handleRemove = () => {
    dispatch(removeBook({ URL, id }))
      .then(() => {
        dispatch(fetchBooks(URL));
      });
  };

  return (
    <li className="book-item">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => handleRemove()}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
