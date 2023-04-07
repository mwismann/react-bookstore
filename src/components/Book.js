import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/bookstoreApi';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const handleRemove = () => {
    dispatch(removeBook({ URL, id }))
      .then(() => {
        dispatch(fetchBooks(URL));
      });
  };

  return (
    <li className="w-full p-8 pr-40 flex items-center font-['Roboto_Slab'] bg-white border border-[#e8e8e8] rounded">
      <div className="grow">
        <span className="text-sm font-['Montserrat'] text-[#121212]/50 font-bold">Science Fiction</span>
        <h2 className="text-[1.375rem] font-bold tracking-tight">{title}</h2>
        <p className="text-sm text-[#4386bf] font-light leading-3">{author}</p>
        <div className="mt-8 flex items-center gap-4 text-sm text-[#4386bf] font-light divide-x-2">
          <button type="button">Comments</button>
          <button type="button" className="pl-4" onClick={() => handleRemove()}>Remove</button>
          <button type="button" className="pl-4">Edit</button>
        </div>
      </div>
      <div className="px-24 flex items-center gap-7 border-r-2 border-[#e8e8e8]">
        <div className="w-16 h-16 border-4 border-[#379cf6] border-l-[#e8e8e8] rounded-full rotate-45" />
        <div className="font-['Montserrat']">
          <p className="text-4xl text-[#121212]">75%</p>
          <p className="text-sm text-[#121212]/50">Completed</p>
        </div>
      </div>
      <div className="ml-16 font-light text-sm uppercase">
        <p className="text-[#121212]/50">Current Chapter</p>
        <p className="mt-1 text-[#121212] text-base tracking-tight">Chapter 12</p>
        <button type="button" className="mt-6 py-2 px-8 tracking-wide uppercase text-white bg-[#0290ff] rounded">Update Progress</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
