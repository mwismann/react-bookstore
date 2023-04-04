import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesList: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      const newState = state;
      newState.categoriesList = 'under construction';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
