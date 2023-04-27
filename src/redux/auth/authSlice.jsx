import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState: {
    user: { name: null, email: null, photoURL: null },
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
        };
        state.isLoggedIn = true;
        state.status = payload.status;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        localStorage.setItem(
          'user',
          JSON.stringify({
            user: payload.user,
          })
        );
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.user = payload.user;
        state.isLoggedIn = true;
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
      }
    );
  },
});

// Selectors
// export const selectAuth = state => state.auth;
// export const selectUser = state => state.auth.user;

// Actions
// export const { setUser, logout } = AuthSlice.actions;

// Reducer
export const authReducer = AuthSlice.reducer;
