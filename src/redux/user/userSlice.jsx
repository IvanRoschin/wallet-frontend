import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState: {
    currentUser: {
      name: null,
      email: null,
      photoURL: null,
      phone: null,
      balance: null,
      categories: '',
      transactions: '',
    },
    status: null,
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.current.matchFulfilled,
      (state, { payload }) => {
        console.log('currentPayload', payload.user);
        state.currentUser = {
          name: payload.name,
          email: payload.email,
          photoURL: payload.photoURL,
          phone: payload.phone,
          balance: payload.balance,
          categories: payload.categories,
          transactions: payload.transactions,
        };
        state.status = payload.status;
      }
    );
  },
});

// Selectors

// Actions

// Reducer
export const userReducer = UserSlice.reducer;
