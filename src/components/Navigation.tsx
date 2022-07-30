import { Link } from 'react-router-dom'

import { RouteNames } from '../types'
import { useActions } from '../hooks/useActions'
import { useAppSelector } from '../hooks/useAppSelector'

const Navigation = () => {
	const { token } = useAppSelector(state => state.auth)
	const { logout } = useActions()

	return (
		<nav className='flex justify-between items-center px-5 h-[50px] bg-gray-200 shadow-md'>
			<Link to={RouteNames.HOME}>Airport</Link>
			{token ? (
				<button onClick={logout}>Logout</button>
			) : (
				<Link to={RouteNames.AUTH}>Auth</Link>
			)}
		</nav>
	)
}

export default Navigation
