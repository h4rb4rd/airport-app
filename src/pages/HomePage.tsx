import { useMemo } from 'react'
import AirportCard from '../components/AirportCard'
import Filter from '../components/Filter'
import Search from '../components/Search'
import { useFetchAirportsQuery } from '../services/AirportService'

const HomePage = () => {
	const { data, isLoading, isError } = useFetchAirportsQuery({
		page: 1,
		count: 10,
	})

	console.log(data)

	const memoAirports = useMemo(
		() =>
			data?.results?.map(airport => {
				return <AirportCard key={airport.id} airport={airport} />
			}),
		[data?.results]
	)

	return (
		<>
			<Search />
			<Filter />
			{isLoading && <p className='text-center text-lg'>Loading...</p>}
			{isError && (
				<p className='text-center text-lg text-red-600'>
					Could not fetch airports
				</p>
			)}
			{memoAirports}
		</>
	)
}

export default HomePage
