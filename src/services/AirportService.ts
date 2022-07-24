import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IAirport, IAirportDetails, ServerResponse } from '../models'
import {
	AirportCountryType,
	AirportRegionType,
	AirportsRequestQueryType,
	AirportTypeType,
} from '../types'

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
			query: ({ page, count, type, region, country }) => ({
				url: `/airports`,
				params: {
					page,
					count,
					type,
					region,
					country,
				},
			}),
		}),
		searchAirports: build.query<IAirport[], string>({
			query: (search: string) => ({
				url: `/airports`,
				params: {
					search,
					count: 10,
				},
			}),
			transformResponse: (response: ServerResponse<IAirport>) =>
				response.results,
		}),
		fetchAirport: build.query<IAirportDetails, string>({
			query: (id: string) => ({
				url: `/airports/${id}`,
			}),
		}),
		fetchAirportTypes: build.query<AirportTypeType[], string>({
			query: () => ({
				url: `/handbooks/airport-types`,
			}),
		}),
		fetchAirportRegions: build.query<AirportRegionType[], string>({
			query: () => ({
				url: `/handbooks/regions`,
			}),
		}),
		fetchAirportCountries: build.query<AirportCountryType[], string>({
			query: () => ({
				url: `/handbooks/countries`,
			}),
		}),
	}),
})

export const {
	useFetchAirportsQuery,
	useSearchAirportsQuery,
	useFetchAirportQuery,
	useFetchAirportTypesQuery,
	useFetchAirportRegionsQuery,
	useFetchAirportCountriesQuery,
} = airportApi
