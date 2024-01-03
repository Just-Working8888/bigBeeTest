// authSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../index';

import axios from 'axios';
import { login } from 'api/events';

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ username, password }: { username: string; password: string }, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener('abort', () => source.cancel('Operation canceled by the user.'));
    const response = await login(username, password, source.token);
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state) => {
      state.isAuthenticated = true;
    });
  },
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
