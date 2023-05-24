// import { createSlice } from '@reduxjs/toolkit';
// import { transApi } from './transactionsApi';

// export const TransSlice = createSlice({
//   name: 'trans',
//   initialState: {
//     periodTransactions: null,
//     periodBalance: null,
//   },
//   extraReducers: builder => {
//     builder.addMatcher(
//       transApi.endpoints.getPeriod.matchFulfilled,
//       (state, { payload }) => {
//         state.periodTransactions = payload;
//         state.status = payload.status;
//       }
//     );
//     builder.addMatcher(
//       transApi.endpoints.balance.matchFulfilled,
//       (state, { payload }) => {
//         state.periodBalance = payload;
//         state.status = payload.status;
//       }
//     );
//   },
// });

// // Selectors

// // Actions

// // Reducer
// export const transactionReducer = TransSlice.reducer;
