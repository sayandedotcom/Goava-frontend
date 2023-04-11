import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  progress: 0,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    initialProgress: (state) => {
      state.progress = 0;
    },
    fullProgress: (state) => {
      state.progress = 100;
    },
  },
});

export const {initialProgress, fullProgress} = loaderSlice.actions;
export default loaderSlice.reducer;
