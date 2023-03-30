import PropTypes from 'prop-types';
import BookItem from './BookItem';

const Bookshelf = ({ bookList }) => (
  <ul>
    {bookList.map((book) => (
      <BookItem key={book.id} item={book} />
    ))}
  </ul>
);

Bookshelf.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
};

export default Bookshelf;
