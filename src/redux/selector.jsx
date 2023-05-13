export const selectToken = state => state.auth.accessToken;
export const selectStatus = state => state.auth.status;
export const selectUser = state => state.auth.user;
export const selectBalance = state => state.trans.balance;
export const selectError = state => state.auth.error;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
