import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const ACCESS_TOKEN = 'u-token'
const REFRESH_TOKEN = 'u-refresh-token'

interface AuthState {
	token: string | null
	refreshToken: string | null
}

const initialState: AuthState = {
	token: localStorage.getItem(ACCESS_TOKEN),
	refreshToken: localStorage.getItem(REFRESH_TOKEN),
}

export const authSlice = createSlice({
	name: 'AuthSlice',
	initialState,
	reducers: {
		setCredentials(
			state,
			action: PayloadAction<{ accessToken: string; refreshToken: string }>
		) {
			state.token = action.payload.accessToken
			state.refreshToken = action.payload.refreshToken

			action.payload.accessToken &&
				localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken)
			action.payload.refreshToken &&
				localStorage.setItem(REFRESH_TOKEN, action.payload.refreshToken)
		},
		logout(state) {
			state.token = null
			state.refreshToken = null
			localStorage.removeItem(ACCESS_TOKEN)
			localStorage.removeItem(REFRESH_TOKEN)
		},
	},
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
