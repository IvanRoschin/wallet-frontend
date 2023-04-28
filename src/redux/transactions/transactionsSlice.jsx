import { createSlice } from '@reduxjs/toolkit';
import { transApi } from './transactionsApi';

export const TransSlice = createSlice({
  name: 'transSlice',
  initialState: {
    transactions: null,
    balance: null,
  },
  extraReducers: builder => {
    builder.addMatcher(
      transApi.endpoints.balance.matchFulfilled,
      (state, { payload }) => {
        console.log('payload balance', payload);

        state.balance = payload;
        state.status = payload.status;
      }
    );
    builder.addMatcher(
      transApi.endpoints.getAll.matchFulfilled,
      (state, { payload }) => {
        console.log('payload trans', payload);
        state.balance = payload;
        state.status = payload.status;
      }
    );
  },
});

// Selectors
// export const selectUserBalance = state => state.user;

// Actions

// Reducer
export const transReducer = TransSlice.reducer;
