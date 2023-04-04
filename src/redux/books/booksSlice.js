import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [],
};

const booksSlice = createSlice({
  name: 'booksList',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList = [...state.bookList, action.payload];
    },
    removeBook: (state, action) => {
      state.bookList = state.bookList.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;