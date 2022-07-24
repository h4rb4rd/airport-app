import { ChangeEvent, useCallback } from 'react'

import Select from './Select'
import { useFetchAirportTypesQuery } from '../services/AirportService'
import { useAppSelector } from '../hooks/useAppSelector'
import { useActions } from '../hooks/useActions'

const TypesSelect = () => {
	const { data, isLoading, isError } = useFetchAirportTypesQuery('')
	const { type } = useAppSelector(state => state.filters)
	const { setType } = useActions()

	const changeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		setType(e.target.value)
	}, [])

	return (
		<Select
			name='Type'
			value={type}
			options={data}
			isLoading={isLoading}
			isError={isError}
			changeHandler={changeHandler}
		/>
	)
}

export default TypesSelect
