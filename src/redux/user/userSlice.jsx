import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState: {
    currentUser: null,
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.current.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = payload.user;
        state.status = payload.status;
      }
    );
  },
});

// Selectors
export const selectUserAuth = state => state.user;

// Actions

// Reducer
export const userReducer = UserSlice.reducer;
