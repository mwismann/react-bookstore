import PropTypes from 'prop-types';

const BookItem = ({ item }) => (
  <li>
    <p>
      title:
      {item.title}
    </p>
    <p>
      Author:
      {item.author}
    </p>
  </li>
);

BookItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BookItem;
