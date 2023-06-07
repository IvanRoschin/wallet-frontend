import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST_URL } from '../../baseSettings/urls';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  tagTypes: ['currency'],
  baseQuery: fetchBaseQuery({
    baseUrl: HOST_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getCurrency: builder.query({
      query: () => 'currency',
      providesTags: ['currency'],
    }),
  }),
});

export const { useGetCurrencyQuery } = currencyApi;

export const currencyApiReducer = currencyApi.reducer;
