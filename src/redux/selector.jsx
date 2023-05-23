export const selectToken = state => state.auth.accessToken;
export const selectStatus = state => state.auth.status;
export const selectUser = state => state.auth.user;
export const selectError = state => state.auth.error;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectPeriodTransaction = state =>
  state.transactions.periodTransactions;
export const selectPeriodBalance = state => state.transactions.periodBalance;
