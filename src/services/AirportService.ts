import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IAirport, ServerResponse } from '../models'
import { AirportsRequestQueryType } from '../types'

export const airportApi = createApi({
	reducerPath: 'airport/api',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_BASE_URL,
	}),

	endpoints: build => ({
		fetchAirports: build.query<
			ServerResponse<IAirport>,
			AirportsRequestQueryType
		>({
			query: ({ page, count }) => ({
				url: `/airports`,
				params: {
					page: page,
					count: count,
				},
			}),
		}),
	}),
})

export const { useFetchAirportsQuery } = airportApi
