export interface IAirport {
	id: number
	name: string
	ident: string
	local_code?: any
	region: string
	type: string
	country: string
}

export interface ServerResponse<T> {
	count: number
	next: number
	previous?: any
	results: T[]
}

export interface IAirportDetails {
	ident: string
	local_code?: any
	name: string
	coordinates: string
	elevation_ft: string
	gps_code?: any
	iata_code?: any
	continent: string
	type: string
	country: string
	region: string
	municipality: string
}

export interface IAuthResponse {
	refresh: string
	access: string
}
