import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

const Bookshelf = () => {
  const { bookList } = useSelector((state) => state.bookList);
  return (
    <>
      <section className="bookshelf">
        <ul>
          {bookList.map((book) => (
            <Book key={book.id} id={book.id} title={book.title} author={book.author} />
          ))}
        </ul>
      </section>
      <InputBook />
    </>
  );
};

export default Bookshelf;
