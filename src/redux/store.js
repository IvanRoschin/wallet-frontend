import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { authApi } from './auth/authApi';
import { userApi } from './user/userApi';
import { transApi } from './transactions/transactionsApi';

import { authReducer } from './auth/authSlice';
import { transReducer } from './transactions/transactionsSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    trans: transReducer,
    [authApi.reducerPath]: authApi.reducer,
    [transApi.reducerPath]: transApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
    userApi.middleware,
    transApi.middleware,
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
