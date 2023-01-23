import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { createApi, EndpointDefinitions, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { buildQueries } from '@testing-library/react';


export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postApiSlice = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<IPost[], void>({
      query: () => '/posts'
    }),
    fetchPost: builder.query<IPost, number | void>({
      query: (id: number) => `/posts/${id}`
    })
  }),
});

export const { useFetchPostQuery, useFetchPostsQuery } = postApiSlice;