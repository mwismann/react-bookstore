import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const booksSlice = createSlice({
  name: 'booksList',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newState = state;
      newState.bookList = [...state.bookList, action.payload];
    },
    removeBook: (state, action) => {
      const newState = state;
      newState.bookList = state.bookList.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
