import { useEffect, useState } from 'react'

import CountriesSelect from './CountriesSelect'
import RegionsSelect from './RegionsSelect'
import TypesSelect from './TypesSelect'
import { useActions } from '../hooks/useActions'
import { useAppSelector } from '../hooks/useAppSelector'

const Filter = () => {
	const { type, region, country } = useAppSelector(state => state.filters)
	const [isResetButton, setIsResetButton] = useState(false)
	const { resetFilters } = useActions()

	useEffect(() => {
		if (type || region || country) {
			setIsResetButton(true)
		} else {
			setIsResetButton(false)
		}
	}, [type, region, country])

	return (
		<div className='border py-2 px-4 mb-2'>
			<span className='font-bold mr-2'>Filter</span>
			<TypesSelect />
			<RegionsSelect />
			<CountriesSelect />
			{isResetButton && (
				<button
					className='py-1 px-4 bg-red-700 text-white rounded'
					onClick={() => resetFilters()}
				>
					&times;
				</button>
			)}
		</div>
	)
}

export default Filter
