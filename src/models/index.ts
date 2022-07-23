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
