import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const HOST_NAME = 'http://localhost:3030/api/transactions';

export const transApi = createApi({
  reducerPath: 'transApi',
  tagTypes: ['transactions'],
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
    getAll: builder.query({
      query: id => '/',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Transactions', id })),
              { type: 'Transactions', id: 'LIST' },
            ]
          : [{ type: 'Transactions', id: 'LIST' }],
    }),

    getPeriod: builder.query({
      query(credentials) {
        return {
          url: `/period`,
          method: 'GET',
          params: credentials,
        };
      },
      providesTags: (result, error, id) => [{ type: 'Transactions', id }],
    }),

    balance: builder.query({
      query(credentials) {
        return {
          url: `/balance`,
          method: 'GET',
          params: credentials,
        };
      },
      providesTags: (result, error, id) => [{ type: 'Transactions', id }],
    }),

    add: builder.mutation({
      query(credentials) {
        return {
          url: `/`,
          method: 'POST',
          body: credentials,
        };
      },
      invalidatesTags: [{ type: 'Transactions', id: 'LIST' }],
    }),
    delete: builder.mutation({
      query(id) {
        return {
          url: `/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'Transactions', id }],
    }),
  }),
});

export const {
  useGetAllQuery,
  useGetPeriodQuery,
  useBalanceQuery,
  useAddMutation,
  useDeleteMutation,
} = transApi;

export const transApiReducer = transApi.reducer;
