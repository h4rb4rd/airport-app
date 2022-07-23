import { Navigate, Route, Routes } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import MainLayout from './MainLayout'
import NotFoundPage from '../pages/NotFoundPage'
import { RouteNames } from '../types'
import AuthPage from '../pages/AuthPage'
import AirportDetailPage from '../pages/AirportDetailPage'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Navigate to={RouteNames.HOME} />} />
				<Route path={RouteNames.HOME} element={<HomePage />} />
				<Route path={RouteNames.AUTH} element={<AuthPage />} />
				<Route
					path={RouteNames.AIRPORT + '/:id'}
					element={<AirportDetailPage />}
				/>
			</Route>
			<Route path={RouteNames.NOT_FOUND} element={<NotFoundPage />} />
		</Routes>
	)
}

export default App
