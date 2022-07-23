import { useNavigate } from 'react-router-dom'

import { IAirport } from '../models'
import { RouteNames } from '../types'

interface AirportCardProps {
	airport: IAirport
}

const AirportCard = ({ airport }: AirportCardProps) => {
	const navigate = useNavigate()
	const navigateHandler = () => navigate(`${RouteNames.AIRPORT}/${airport.id}`)

	return (
		<ul
			className='border rounded-md py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer list-none'
			onClick={navigateHandler}
		>
			<li className='text-lg font-bold'>{airport?.name}</li>
			<li>{airport?.region}</li>
			<li>{airport?.type}</li>
			<li>{airport?.country}</li>
			<li>{airport?.local_code}</li>
			<li>{airport?.ident}</li>
		</ul>
	)
}

export default AirportCard
