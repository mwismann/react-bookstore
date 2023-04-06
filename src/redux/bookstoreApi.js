import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_ID = 'C98irUr8Ng5NvBQ6AbEs';

export const fetchBooks = createAsyncThunk(
  'booksList/fetchBooks',
  async (URL, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL + API_ID}/books`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const postBook = createAsyncThunk(
  'booksList/postBook',
  async ({URL, newBook }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${URL + API_ID}/books`, newBook, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeBook = createAsyncThunk(
  'booksList/removeBook',
  async ({URL, id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${URL + API_ID}/books/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);