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
import { currencyApi } from './currency/currencyApi';
import { categoryApi } from './category/categoryApi';

import { authReducer } from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [authApi.reducerPath]: authApi.reducer,
    [transApi.reducerPath]: transApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
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
    currencyApi.middleware,
    categoryApi.middleware,
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
