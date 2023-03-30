import PropTypes from 'prop-types';
import BookItem from './BookItem';

const Bookshelf = ({ bookList, removeBook }) => (
  <ul>
    {bookList.map((book) => (
      <BookItem key={book.id} item={book} removeBook={removeBook} />
    ))}
  </ul>
);

Bookshelf.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Bookshelf;
