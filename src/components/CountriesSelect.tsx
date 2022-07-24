import { ChangeEvent, useCallback } from 'react'

import Select from './Select'
import { useFetchAirportCountriesQuery } from '../services/AirportService'
import { useAppSelector } from '../hooks/useAppSelector'
import { useActions } from '../hooks/useActions'

const CountriesSelect = () => {
	const { data, isLoading, isError } = useFetchAirportCountriesQuery('')
	const { country } = useAppSelector(state => state.filters)
	const { setCountry } = useActions()

	const changeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		setCountry(e.target.value)
	}, [])

	return (
		<Select
			name='Country'
			value={country}
			options={data}
			isLoading={isLoading}
			isError={isError}
			changeHandler={changeHandler}
		/>
	)
}

export default CountriesSelect
