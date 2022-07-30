import { UseFormRegister } from 'react-hook-form'

import { FormDataType } from '../types'

interface PasswordFieldProps {
	register: UseFormRegister<FormDataType>
}

const PasswordField = ({ register }: PasswordFieldProps) => {
	return (
		<div className='flex flex-col'>
			<label htmlFor='passwordFieldId'>Password</label>
			<input
				{...register('password', {
					required: 'password is required',
					minLength: {
						value: 4,
						message: 'min length 4',
					},
					maxLength: {
						value: 12,
						message: 'max length 12',
					},
				})}
				type='password'
				placeholder='Password'
				id='passwordFieldId'
				className='border py-1 px-2 w-full'
			/>
		</div>
	)
}

export default PasswordField
