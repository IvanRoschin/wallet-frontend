import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  }),
  endpoints: builder => ({
    signup: builder.mutation({
      query(body) {
        return {
          url: `signup`,
          method: 'POST',
          body,
        };
      },

      invalidatesTags: ['auth'],
    }),

    login: builder.mutation({
      query(body) {
        return {
          url: `login`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['auth'],
    }),

    logout: builder.query({
      query: id => 'logout',
      providesTags: ['auth'],
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutQuery } = authApi;

export const authApiReducer = authApi.reducer;
