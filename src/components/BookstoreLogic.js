import { useState } from 'react';
import Bookshelf from './Bookshelf';
import InputBook from './InputBook';

const BookstoreLogic = () => {
  const [bookList, setBookList] = useState([
    {
      id: 1,
      title: 'The Shadow over Innsmouth',
      author: 'H.P. Lovecraft',
    },
    {
      id: 2,
      title: 'Do Androids Dream of Electric Sheep?',
      author: 'Philip K. Dick',
    },
    {
      id: 3,
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
    },
  ]);

  const addBook = (bookTitle, bookAuthor) => {
    const newBook = {
      id: 4,
      title: bookTitle,
      author: bookAuthor,
    };
    setBookList([...bookList, newBook]);
  };

  return (
    <div>
      <Bookshelf bookList={bookList} />
      <InputBook addBook={addBook} />
    </div>
  );
};

export default BookstoreLogic;
