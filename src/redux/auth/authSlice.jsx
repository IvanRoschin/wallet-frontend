import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState: {
    user: { name: null, email: null, image: null },
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
        console.log('payload', payload);
        state.user = {
          name: payload.data.user.name,
          email: payload.data.user.email,
          image: payload.data.user.image,
        };
        state.isLoggedIn = true;
        state.status = payload.status;
      }
    );
  },
});

// Selectors
export const selectAuth = state => state.auth;

// Actions
export const { setUser, logout } = AuthSlice.actions;

// Reducer
export const authReducer = AuthSlice.reducer;
