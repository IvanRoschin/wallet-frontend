import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const HOST_NAME = 'http://localhost:3030/api/currency';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  tagTypes: ['currency'],
  baseQuery: fetchBaseQuery({
    baseUrl: HOST_NAME,
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
      query: () => '/',
      providesTags: ['currency'],
    }),
  }),
});

export const { useGetCurrencyQuery } = currencyApi;

export const currencyApiReducer = currencyApi.reducer;
