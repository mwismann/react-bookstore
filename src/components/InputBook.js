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
    <form className="mt-6" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="mb-4 text-xl text-[#888] font-bold uppercase tracking-tight">Add New Book</h2>
      <input type="text" className="w-2/5 py-2 px-4 text-[#121212] tracking-tighter border border-[#e8e8e8] rounded placeholder-[#c4c4c4] focus:outline-[#0290ff]" placeholder="Add title" value={title} onChange={handleTitleChange} required />
      <input type="text" className="w-2/5 mx-8 py-2 px-4 text-[#121212] tracking-tighter border border-[#e8e8e8] rounded placeholder-[#c4c4c4] focus:outline-[#0290ff]" placeholder="Add author" value={author} onChange={handleAuthorChange} required />
      <button type="submit" className="py-2.5 px-14 uppercase tracking-wide font-['Roboto_Slab'] font-bold text-sm text-white bg-[#0290ff] rounded">Add book</button>
    </form>
  );
};

export default InputBook;
