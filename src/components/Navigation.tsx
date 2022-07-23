import { Link } from 'react-router-dom'
import { RouteNames } from '../types'

const Navigation = () => {
	return (
		<nav className='flex justify-between items-center px-5 h-[50px] bg-gray-200 shadow-md'>
			<Link to={RouteNames.HOME}>Airport</Link>
			<Link to={RouteNames.AUTH}>Auth</Link>
		</nav>
	)
}

export default Navigation
