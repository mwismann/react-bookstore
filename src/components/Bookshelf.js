import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/bookstoreApi';
import Book from './Book';
import InputBook from './InputBook';

const Bookshelf = () => {
  const {
    bookList, isLoading, isSuccess, error,
  } = useSelector((state) => state.bookList);
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  useEffect(() => {
    dispatch(fetchBooks(URL));
  }, []);

  const books = isSuccess && Object.keys(bookList).map((key) => (
    bookList[key].map((book) => (
      <Book key={key} title={book.title} author={book.author} id={key} />
    ))
  ));

  return (
    <>
      <section className="bookshelf">
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        <ul>
          {books}
        </ul>
      </section>
      <InputBook />
    </>
  );
};

export default Bookshelf;
