const getToken = state => state.auth.accessToken;
const getStatus = state => state.auth.status;
const getUser = state => state.auth.user;
const getBalance = state => state.trans.balance;

export const authSelectors = { getToken, getStatus, getUser };

export const transSelectors = { getBalance };
