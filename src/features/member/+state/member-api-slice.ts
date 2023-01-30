import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { createApi, EndpointDefinitions, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { buildQueries } from '@testing-library/react';

import { IMember } from '../../../model/member';

export const memberApiSlice = createApi({
  reducerPath: 'memberAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1',
  }),
  endpoints: (builder) => ({
    fetchMembers: builder.query<IMember[], void>({
      query: () => '/member'
    })
  }),
});

export const { useFetchMembersQuery } = memberApiSlice;