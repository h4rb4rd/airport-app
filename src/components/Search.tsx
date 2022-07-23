import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { RouteNames } from '../types'
import { useClickOutside } from '../hooks/useClickOutside'
import { useDebounce } from '../hooks/useDebounce'
import { useInput } from '../hooks/useInput'
import { useSearchAirportsQuery } from '../services/AirportService'

const Search = () => {
	const [isDropDown, setIsDropDown] = useState(false)
	const input = useInput()
	const searchBarRef = useRef(null)
	const debouncedSearchValue = useDebounce(input.value)
	const { data, isLoading, isError } =
		useSearchAirportsQuery(debouncedSearchValue)

	const memoAirports = useMemo(
		() =>
			data?.map(airport => {
				return (
					<li
						key={airport.id}
						className='py-2 px-4 mb-2 hover:bg-gray-500 hover:text-white hover:transtion-colors  cursor-pointer '
					>
						<Link
							className='block w-full h-full'
							to={`${RouteNames.AIRPORT}/${airport.id}`}
						>
							{airport.name}
						</Link>
					</li>
				)
			}),
		[data]
	)

	useClickOutside(searchBarRef, () => setIsDropDown(false))

	useEffect(() => {
		setIsDropDown(!!debouncedSearchValue.length)
	}, [debouncedSearchValue, data])

	return (
		<div ref={searchBarRef} className='relative mb-4'>
			<input
				type='text'
				className='border py-2 px-4  outline-0 w-full h-[42px]'
				placeholder='Type something here...'
				onFocus={() => setIsDropDown(!!debouncedSearchValue.length)}
				{...input}
			/>
			{isDropDown && (
				<ul className='absolute  top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white p-2'>
					{isLoading && <p className='text-center text-lg'>Loading...</p>}
					{isError && (
						<li className='text-center text-lg text-red-600'>
							Could not fetch airports
						</li>
					)}
					{memoAirports?.length ? (
						memoAirports
					) : (
						<li className='text-center'>Airports not found</li>
					)}
				</ul>
			)}
		</div>
	)
}

export default Search
