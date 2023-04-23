const getToken = state => state.auth.accessToken;
const getStatus = state => state.auth.status;
const getUser = state => state.auth.user;

export const authSelectors = { getToken, getStatus, getUser };
