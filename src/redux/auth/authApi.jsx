import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST_URL } from '../../baseSettings/urls';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['auth'],
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
    signup: builder.mutation({
      query: credentials => ({
        url: `auth/signup`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'],
    }),

    google: builder.mutation({
      query: credentials => ({
        url: `auth/google`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'],
    }),

    login: builder.mutation({
      query: credentials => ({
        url: `auth/login`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'],
    }),

    logout: builder.mutation({
      query: credentials => ({
        url: 'auth/logout',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'],
    }),

    refresh: builder.mutation({
      query(id) {
        return {
          url: `auth/refresh`,
          method: 'POST',
          id,
        };
      },
      invalidatesTags: ['auth'],
    }),
  }),
});

export const {
  useSignupMutation,
  useGoogleMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
} = authApi;

export const authApiReducer = authApi.reducer;
