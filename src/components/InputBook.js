import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();
    console.log(id);

    dispatch(addBook({ id, title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add title" value={title} onChange={handleTitleChange} required />
      <input type="text" placeholder="Add author" value={author} onChange={handleAuthorChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputBook;
