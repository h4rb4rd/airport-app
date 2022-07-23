export enum RouteNames {
	HOME = '/home',
	AUTH = '/auth',
	AIRPORT = '/airport',
	NOT_FOUND = '*',
}

export type AirportsRequestQueryType = {
	page: number
	count: number
}
