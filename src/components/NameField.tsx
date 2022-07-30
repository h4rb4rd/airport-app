import { UseFormRegister } from 'react-hook-form'

import { FormDataType } from '../types'

export type NameFieldProps = {
	register: UseFormRegister<FormDataType>
}

const NameField = ({ register }: NameFieldProps) => {
	return (
		<div className='flex flex-col mb-2'>
			<label htmlFor='nameFieldId'>Name</label>
			<input
				{...register('username', {
					required: 'name is required',
					minLength: {
						value: 2,
						message: 'min length 2',
					},
					maxLength: {
						value: 16,
						message: 'max length 16',
					},
				})}
				placeholder='Name'
				type='text'
				id='nameFieldId'
				className='border py-1 px-2 w-full'
			/>
		</div>
	)
}

export default NameField
