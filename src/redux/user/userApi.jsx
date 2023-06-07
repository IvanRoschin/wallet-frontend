import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST_URL } from '../../baseSettings/urls';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['user'],
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
    current: builder.query({
      query: () => 'users',
      providesTags: ['user'],
    }),

    delete: builder.mutation({
      query(id) {
        return {
          url: `users`,
          method: 'DELETE',
          id,
        };
      },
      invalidatesTags: ['user'],
    }),

    edit: builder.mutation({
      query(body) {
        return {
          url: `users`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: ['user'],
    }),

    avatar: builder.mutation({
      query(body) {
        return {
          url: `users`,
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
