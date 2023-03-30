import PropTypes from 'prop-types';

const BookItem = ({ item, removeBook }) => (
  <li>
    <p>
      title:
      {' '}
      {item.title}
    </p>
    <p>
      Author:
      {' '}
      {item.author}
    </p>
    <button type="button" onClick={() => removeBook(item.id)}>Remove</button>
  </li>
);

BookItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default BookItem;
