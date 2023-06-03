import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { privateRoutes } from 'baseSettings/baseSettings';

const HOST_NAME = 'http://localhost:3030/api/category';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  tagTypes: ['category'],
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
      providesTags: ['category'],
    }),

    addCategory: builder.mutation({
      query(credentials) {
        return {
          url: `/`,
          method: 'POST',
          body: credentials,
        };
      },
      invalidatesTags: ['category'],
    }),
    deleteCategory: builder.mutation({
      query(categoryId) {
        return {
          url: `/${categoryId}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['category'],
    }),
  }),
});

export const {
  useGetAllQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;

export const categoryApiReducer = categoryApi.reducer;
