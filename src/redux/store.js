import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './categories/categoriesSlice';
import booksSlice from './books/booksSlice';

const store = configureStore({
  reducer: {
    bookList: booksSlice,
    categories: categoriesReducer,
  },
});

export default store;
