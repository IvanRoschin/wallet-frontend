import { createSlice } from '@reduxjs/toolkit';
import { transApi } from './transactionsApi';

export const TransSlice = createSlice({
  name: 'transSlice',
  initialState: {
    date: null,
    type: '',
    category: 'income',
    comment: '',
    sum: null,
    balance: null,
  },
  extraReducers: builder => {
    builder.addMatcher(
      transApi.endpoints.balance.matchFulfilled,
      (state, { payload }) => {
        state.balance = payload;
        state.status = payload.status;
      }
    );
    builder.addMatcher(
      transApi.endpoints.getAll.matchFulfilled,
      (state, { payload }) => {
        state.balance = payload;
        state.status = payload.status;
      }
    );
    builder.addMatcher(
      transApi.endpoints.add.matchFulfilled,
      (state, { payload }) => {
        state.balance = payload;
        state.status = payload.status;
      }
    );
  },
});

// Selectors

// Actions

// Reducer
export const transReducer = TransSlice.reducer;
