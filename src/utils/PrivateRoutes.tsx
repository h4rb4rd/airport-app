import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../hooks/useAppSelector'

import { RouteNames } from '../types'

const PrivateRoutes = () => {
	const { token } = useAppSelector(state => state.auth)
	const location = useLocation()

	if (!token) {
		return <Navigate to={RouteNames.AUTH} state={{ from: location }} />
	}

	return <Outlet />
}

export default PrivateRoutes
