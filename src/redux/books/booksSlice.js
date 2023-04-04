import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      "item_id": "item1",
      "title": "The Great Gatsby",
      "author": "John Smith",
      "category": "Fiction"
    },
    {
      "item_id": "item2",
      "title": "Anna Karenina",
      "author": "Leo Tolstoy",
      "category": "Fiction"
    },
    {
      "item_id": "item3",
      "title": "The Selfish Gene",
      "author": "Richard Dawkins",
      "category": "Nonfiction"
    }
  ],
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
