import { ChangeEvent, useCallback } from 'react'

import Select from './Select'
import { useFetchAirportRegionsQuery } from '../services/AirportService'
import { useAppSelector } from '../hooks/useAppSelector'
import { useActions } from '../hooks/useActions'

const RegionsSelect = () => {
	const { data, isLoading, isError } = useFetchAirportRegionsQuery('')
	const { region } = useAppSelector(state => state.filters)
	const { setRegion } = useActions()

	const changeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		setRegion(e.target.value)
	}, [])

	return (
		<Select
			name='Region'
			value={region}
			options={data}
			isLoading={isLoading}
			isError={isError}
			changeHandler={changeHandler}
		/>
	)
}

export default RegionsSelect
