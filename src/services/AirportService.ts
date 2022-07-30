import {
	BaseQueryFn,
	createApi,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'

import {
	IAirport,
	IAirportDetails,
	IAuthResponse,
	ServerResponse,
} from '../models'
import { RootState } from '../store'
import { authActions } from '../store/slices/authSlice'
import {
	AirportCountryType,
	AirportRegionType,
	AirportsRequestQueryType,
	AirportTypeType,
} from '../types'

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.REACT_APP_BASE_URL,
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.token

		if (token) {
			headers.set('authorization', `Bearer ${token}`)
		}
		return headers
	},
})

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions)

	if (result?.error && result?.error?.status === 401) {
		const token = (api.getState() as RootState).auth.refreshToken

		const refreshResult = await baseQuery(
			{
				url: '/refresh-token/',
				method: 'POST',
				body: { refresh: token ?? '' },
			},
			api,
			extraOptions
		)

		if (refreshResult?.data) {
			const tokenData = refreshResult.data as IAuthResponse

			api.dispatch(
				authActions.setCredentials({
					accessToken: tokenData.access,
					refreshToken: tokenData.refresh,
				})
			)

			result = await baseQuery(args, api, extraOptions)
		} else {
			api.dispatch(authActions.logout())
		}
	}
	return result
}

export const airportApi = createApi({
	reducerPath: 'airport/api',
	baseQuery: baseQueryWithReauth,

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
		signUp: build.mutation<
			IAuthResponse,
			{ username: string; password: string }
		>({
			query: credentials => ({
				url: 'auth/register',
				method: 'POST',
				body: {
					...credentials,
				},
			}),
		}),
		signIn: build.mutation<
			IAuthResponse,
			{ username: string; password: string }
		>({
			query: credentials => ({
				url: 'auth/login',
				method: 'POST',
				body: {
					...credentials,
				},
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
	useSignUpMutation,
	useSignInMutation,
} = airportApi
