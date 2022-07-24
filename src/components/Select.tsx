import { ChangeEvent, memo } from 'react'

interface SelectProps {
	name: string
	value: string | undefined
	options: string[] | undefined
	isLoading: boolean
	isError: boolean
	changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({
	name,
	value,
	options,
	isLoading,
	isError,
	changeHandler,
}: SelectProps) => {
	if (isLoading) return <p className='text-center text-lg'>Loading...</p>

	if (isError)
		return (
			<p className='text-center text-lg text-red-600'>
				Could not fetch options
			</p>
		)

	return (
		<select
			name='types'
			className='mr-2 border py-1 px-2 outline-0'
			onChange={changeHandler}
			value={value || ''}
		>
			<option value='' disabled>
				{name}
			</option>
			{options?.map(option => {
				return (
					<option key={option} value={option}>
						{option}
					</option>
				)
			})}
		</select>
	)
}

export default memo(Select)
