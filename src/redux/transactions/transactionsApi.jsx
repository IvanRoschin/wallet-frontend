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
      providesTags: ['transactions'],
    }),

    getPerMounth: builder.query({
      query: id => '/month',
      providesTags: ['transactions'],
    }),

    getPerYear: builder.query({
      query: id => '/year',
      providesTags: ['transactions'],
    }),

    getByCategory: builder.query({
      query: id => '/category',
      providesTags: ['transactions'],
    }),

    balance: builder.query({
      query: id => '/balance',
      providesTags: ['transactions'],
    }),

    add: builder.mutation({
      query(credentials) {
        return {
          url: `/`,
          method: 'POST',
          body: credentials,
        };
      },
      invalidatesTags: ['transactions'],
    }),
    delete: builder.mutation({
      query(id) {
        return {
          url: `/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['transactions'],
    }),
  }),
});

export const {
  useGetAllQuery,
  useGetPerMounthQuery,
  useGetPerYearQuery,
  useGetByCategoryQuery,
  useBalanceQuery,
  useAddMutation,
  useDeleteMutation,
  // useEditMutation,
  // useAvatarMutation,
} = transApi;

export const transApiReducer = transApi.reducer;
