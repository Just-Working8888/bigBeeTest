import { createSlice } from '@reduxjs/toolkit';

interface MainState {}

const initialState: MainState = {};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

const mainReducer = mainSlice.reducer;

export const {} = mainSlice.actions;
export default mainReducer;
