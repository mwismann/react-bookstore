import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { postBook, fetchBooks } from '../redux/bookstoreApi';

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();

    dispatch(postBook({
      URL,
      newBook: {
        item_id: id,
        title,
        author,
        category: '',
      },
    })).then(() => { dispatch(fetchBooks(URL)); });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Add title" value={title} onChange={handleTitleChange} required />
      <input type="text" placeholder="Add author" value={author} onChange={handleAuthorChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputBook;
