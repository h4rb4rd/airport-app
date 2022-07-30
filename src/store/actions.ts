import { authActions } from './slices/authSlice'
import { filtersActions } from './slices/filtersSlice'

export const actions = {
	...filtersActions,
	...authActions,
}
