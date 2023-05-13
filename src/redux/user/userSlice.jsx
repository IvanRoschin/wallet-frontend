import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

export const UserSlice = createSlice({
  name: 'user',
  initialState: {},
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.current.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.status = payload.status;
      }
    );
  },
});

// Selectors

// Actions

// Reducer
export const userReducer = UserSlice.reducer;
