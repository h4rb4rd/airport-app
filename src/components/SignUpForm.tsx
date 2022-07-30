import { SubmitHandler, useForm } from 'react-hook-form'

import useSignUp from '../hooks/useSignUp'
import { FormDataType } from '../types'
import NameField from './NameField'
import PasswordField from './PasswordField'

const SignUpForm = () => {
	const { handleSignUp, isLoading } = useSignUp()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormDataType>({
		mode: 'onSubmit',
		defaultValues: {
			username: '',
			password: '',
		},
	})

	const onSubmit: SubmitHandler<FormDataType> = ({ username, password }) => {
		handleSignUp(username, password)
		reset()
	}
	return (
		<form className='max-w-[500px]' onSubmit={handleSubmit(onSubmit)}>
			<NameField register={register} />
			{errors.username && (
				<p className='text-center text-sm text-red-600'>
					{errors.username?.message}
				</p>
			)}
			<PasswordField register={register} />
			{errors.password && (
				<p className='text-center text-sm text-red-600'>
					{errors.password?.message}
				</p>
			)}
			<button
				className='py-2 px-4 bg-blue-700 mt-2 text-white'
				type='submit'
				disabled={isLoading}
			>
				Sign Up
			</button>
		</form>
	)
}

export default SignUpForm
