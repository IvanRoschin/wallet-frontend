import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { privateRoutes } from 'baseSettings/baseSettings';

const HOST_NAME = 'http://localhost:3030/api/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: HOST_NAME,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      console.log(token);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
    // baseUrl: HOST_NAME,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.accessToken;
    //   console.log(token);
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: builder => ({
    signup: builder.mutation({
      query: credentials => ({
        url: `signup`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'],
    }),

    google: builder.mutation({
      query: credentials => ({
        url: `google`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'],
    }),

    login: builder.mutation({
      query: credentials => ({
        url: `login`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'],
    }),

    logout: builder.mutation({
      query: credentials => ({
        url: 'logout',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'],
    }),
  }),
});

export const {
  useSignupMutation,
  useGoogleMutation,
  useLoginMutation,
  useLogoutMutation,
} = authApi;

export const authApiReducer = authApi.reducer;
