import { useMemo, useState } from 'react'

import AirportCard from '../components/AirportCard'
import { AIRPORTS_DEFAULT_PAGE, AIRPORTS_PAGE_LIMIT } from '../constants'
import Filter from '../components/Filter'

import Search from '../components/Search'
import { useFetchAirportsQuery } from '../services/AirportService'
import Pagination from '../components/Pagination'

const HomePage = () => {
	const [page, setPage] = useState(AIRPORTS_DEFAULT_PAGE)
	const { data, isLoading, isError } = useFetchAirportsQuery({
		page,
		count: AIRPORTS_PAGE_LIMIT,
	})

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
			{memoAirports && (
				<>
					<Pagination
						pagesTotalCount={data?.count}
						handlePageClick={page => setPage(page)}
					/>
					{memoAirports}
					<Pagination
						pagesTotalCount={data?.count}
						handlePageClick={page => setPage(page)}
					/>
				</>
			)}
		</>
	)
}

export default HomePage
