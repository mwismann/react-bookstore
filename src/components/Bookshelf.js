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
    <div className="container w-10/12 mx-auto">
      <section className="py-9 border-b-2 border-[#e8e8e8]">
        {isLoading && (
          <div className="container my-8 mx-auto flex items-center justify-center gap-3">
            <div className="w-4 h-4 border-2 border-[#379cf6] border-l-[#e8e8e8] rounded-full animate-spin" />
            <h2 className="text-2xl font-semibold text-[#0290ff]">Loading</h2>
          </div>
        )}
        {error && <h2 className="text-xl text-[#dc2929]">{error}</h2>}
        <ul className="flex flex-col gap-5">
          {books}
        </ul>
      </section>
      <InputBook />
    </div>
  );
};

export default Bookshelf;
