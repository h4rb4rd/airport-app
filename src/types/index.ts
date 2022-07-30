export enum RouteNames {
	HOME = '/home',
	AUTH = '/auth',
	AIRPORT = '/airport',
	NOT_FOUND = '*',
}

export type AirportTypeType = string
export type AirportRegionType = string
export type AirportCountryType = string

export interface IFilter {
	type: AirportTypeType
	region: AirportRegionType
	country: AirportCountryType
}

export type AirportsRequestQueryType = {
	page?: number
	count?: number
	type?: AirportTypeType
	region?: AirportRegionType
	country?: AirportCountryType
}

export type FormDataType = {
	username: string
	password: string
}
