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
        console.log('payloadSignup', payload);
        state.user = {
          name: payload.name,
          email: payload.email,
          image: payload.image,
        };
        state.isLoggedIn = true;
        state.status = payload.status;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        console.log('payloadLogin', payload);
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
  },
});

// Selectors
export const selectAuth = state => state.auth;

// Actions
// export const { setUser, logout } = AuthSlice.actions;

// Reducer
export const authReducer = AuthSlice.reducer;

export const UserSlice = createSlice({
  name: 'userSlice',
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
        console.log('payloadSignup', payload);
        state.user = {
          name: payload.name,
          email: payload.email,
          image: payload.image,
        };
        state.isLoggedIn = true;
        state.status = payload.status;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        console.log('payloadLogin', payload);
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
  },
});

// Selectors
export const selectUser = state => state.user;

// Actions
// export const { setUser, logout } = AuthSlice.actions;

// Reducer
export const userReducer = UserSlice.reducer;
