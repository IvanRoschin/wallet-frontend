import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST_URL } from '../../baseSettings/urls';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  tagTypes: ['category'],
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
    getAll: builder.query({
      query: id => 'category',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Category', id })),
              { type: 'Category', id: 'LIST' },
            ]
          : [{ type: 'Category', id: 'LIST' }],
    }),

    addCategory: builder.mutation({
      query(credentials) {
        return {
          url: `category`,
          method: 'POST',
          body: credentials,
        };
      },
      invalidatesTags: [{ type: 'Category', id: 'LIST' }],
    }),

    deleteCategory: builder.mutation({
      query(categoryId) {
        return {
          url: `category/${categoryId}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'Category', id }],
    }),
  }),
});

export const {
  useGetAllQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;

export const categoryApiReducer = categoryApi.reducer;
