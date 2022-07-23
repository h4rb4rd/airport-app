import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { airportApi } from '../services/AirportService'

const rootReducer = combineReducers({
	[airportApi.reducerPath]: airportApi.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
