import { useParams } from 'react-router-dom'
import { useFetchAirportQuery } from '../services/AirportService'

const AirportDetailPage = () => {
	const { id } = useParams<{ id: string }>()
	const { data, isLoading, isError } = useFetchAirportQuery(id || '')

	if (isLoading) return <p className='text-center text-lg'>Loading...</p>

	if (isError)
		return (
			<p className='text-center text-lg text-red-600'>
				Could not fetch airport details
			</p>
		)

	return (
		<>
			<h1 className='text-center text-2xl mb-3'>{data?.name}</h1>
			<p className='text-center mb-1'>Coordinates: {data?.coordinates}</p>
			<p className='text-center mb-1'>Country: {data?.country}</p>
			<p className='text-center'>Region: {data?.region}</p>
		</>
	)
}

export default AirportDetailPage
