import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AirportRegionType, AirportTypeType } from '../../types'

interface FiltersState {
	type: AirportTypeType | undefined
	region: AirportRegionType | undefined
	country: AirportRegionType | undefined
}

const initialState: FiltersState = {
	type: undefined,
	region: undefined,
	country: undefined,
}

export const filtersSlice = createSlice({
	name: 'filtersSlice',
	initialState,
	reducers: {
		setType(state, action: PayloadAction<string>) {
			state.type = action.payload
		},
		setRegion(state, action: PayloadAction<string>) {
			state.region = action.payload
		},
		setCountry(state, action: PayloadAction<string>) {
			state.country = action.payload
		},
		resetFilters(state) {
			state.type = undefined
			state.region = undefined
			state.country = undefined
		},
	},
})

export const filtersActions = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer
