import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const HOST_NAME = 'http://localhost:3030/api/users';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['user'],
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
    current: builder.query({
      query: () => '/',
      providesTags: ['user'],
    }),

    delete: builder.mutation({
      query(id) {
        return {
          url: `/`,
          method: 'DELETE',
          id,
        };
      },
      invalidatesTags: ['user'],
    }),

    edit: builder.mutation({
      query(body) {
        return {
          url: `/`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: ['user'],
    }),

    avatar: builder.mutation({
      query(body) {
        return {
          url: `/`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useCurrentQuery,
  useDeleteMutation,
  useEditMutation,
  useAvatarMutation,
} = userApi;

export const userApiReducer = userApi.reducer;
