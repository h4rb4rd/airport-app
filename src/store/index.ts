import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { airportApi } from '../services/AirportService'
import { authReducer } from './slices/authSlice'
import { filtersReducer } from './slices/filtersSlice'

const rootReducer = combineReducers({
	[airportApi.reducerPath]: airportApi.reducer,
	filters: filtersReducer,
	auth: authReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(airportApi.middleware),
	})
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
