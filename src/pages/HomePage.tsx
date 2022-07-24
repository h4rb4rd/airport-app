import { useMemo, useState } from 'react'

import AirportCard from '../components/AirportCard'
import { AIRPORTS_DEFAULT_PAGE, AIRPORTS_PAGE_LIMIT } from '../constants'
import Filter from '../components/Filter'
import Search from '../components/Search'
import Pagination from '../components/Pagination'
import { useFetchAirportsQuery } from '../services/AirportService'
import { useAppSelector } from '../hooks/useAppSelector'

const HomePage = () => {
	const { type, region, country } = useAppSelector(state => state.filters)
	const [page, setPage] = useState(AIRPORTS_DEFAULT_PAGE)
	const { data, isLoading, isError } = useFetchAirportsQuery({
		page: page,
		count: AIRPORTS_PAGE_LIMIT,
		type,
		region,
		country,
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
	)
}

export default HomePage
