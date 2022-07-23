import { useParams } from 'react-router-dom'

const AirportDetailPage = () => {
	const { id } = useParams<{ id: string }>()

	return <>Airport {id}</>
}

export default AirportDetailPage
