import { Navigate, Route, Routes } from 'react-router-dom'

import AuthPage from '../pages/AuthPage'
import AirportDetailPage from '../pages/AirportDetailPage'
import HomePage from '../pages/HomePage'
import MainLayout from './MainLayout'
import NotFoundPage from '../pages/NotFoundPage'
import PrivateRoutes from '../utils/PrivateRoutes'
import { RouteNames } from '../types'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Navigate to={RouteNames.AUTH} />} />
				<Route element={<PrivateRoutes />}>
					<Route path={RouteNames.HOME} element={<HomePage />} />
					<Route
						path={RouteNames.AIRPORT + '/:id'}
						element={<AirportDetailPage />}
					/>
				</Route>
				<Route path={RouteNames.AUTH} element={<AuthPage />} />
			</Route>
			<Route path={RouteNames.NOT_FOUND} element={<NotFoundPage />} />
		</Routes>
	)
}

export default App
