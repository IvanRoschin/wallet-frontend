import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState: {
    user: {
      name: null,
      email: null,
      photoURL: null,
      phone: null,
      balance: null,
      categories: '',
      transactions: '',
    },
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
        state.user = {
          name: payload.name,
          email: payload.email,
          photoURL: payload.photoURL,
          phone: payload.phone,
          balance: payload.balance,
          categories: payload.categories,
          transactions: payload.transactions,
        };
        state.status = payload.status;
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
  },
});

// Selectors

// Actions

// Reducer
export const authReducer = AuthSlice.reducer;
