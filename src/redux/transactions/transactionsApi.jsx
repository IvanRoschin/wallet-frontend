import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const HOST_NAME = 'http://localhost:3030/api/transactions';

export const transApi = createApi({
  reducerPath: 'transApi',
  tagTypes: ['trans'],
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
      providesTags: ['trans'],
    }),

    getPerMounth: builder.query({
      query: id => '/month',
      providesTags: ['trans'],
    }),

    getPerYear: builder.query({
      query: id => '/year',
      providesTags: ['trans'],
    }),

    balance: builder.query({
      query: id => '/balance',
      providesTags: ['trans'],
    }),

    add: builder.mutation({
      query(credentials) {
        return {
          url: `/`,
          method: 'POST',
          body: credentials,
        };
      },
      invalidatesTags: ['trans'],
    }),
  }),
});

export const {
  useGetAllQuery,
  useGetPerMounthQuery,
  useGetPerYearQuery,
  useBalanceQuery,
  useAddMutation,
  // useDeleteMutation,
  // useEditMutation,
  // useAvatarMutation,
} = transApi;

export const transApiReducer = transApi.reducer;
