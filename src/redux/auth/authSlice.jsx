import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { userApi } from 'redux/user/userApi';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    status: null,
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
  },

  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.logout.matchFulfilled,
      (state, { payload }) => {
        state.user = null;
        state.status = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.error = false;
      }
    );
    builder.addMatcher(
      userApi.endpoints.current.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.status = payload.status;
        state.error = false;
      }
    );
    builder.addMatcher(
      userApi.endpoints.delete.matchFulfilled,
      (state, { payload }) => {
        state.user = null;
        state.status = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.error = false;
      }
    );
  },
});

// Selectors

// Actions

// Reducer
export const authReducer = AuthSlice.reducer;
