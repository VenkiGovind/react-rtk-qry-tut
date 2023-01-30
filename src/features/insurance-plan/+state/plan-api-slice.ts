import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { createApi, EndpointDefinitions, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { buildQueries } from '@testing-library/react';

export interface IPlan {
  id: number;
  planName: string;
  description: string;
  startDate: Date;
  endDatae: Date;
}


export const planApiSlice = createApi({
  reducerPath: 'planAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1',
  }),
  endpoints: (builder) => ({
    fetchPlans: builder.query<IPlan[], void>({
      query: () => '/plan/list'
    }),
    fetchPlanById: builder.query<IPlan, number>({
      query: (id: number) => '/plan/' + id
    }),
  }),
});

export const { useFetchPlansQuery, useFetchPlanByIdQuery } = planApiSlice;