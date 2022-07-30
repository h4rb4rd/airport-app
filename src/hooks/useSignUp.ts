import { useEffect } from 'react'

import { useSignUpMutation } from '../services/AirportService'
import { useActions } from './useActions'

const useSignUp = () => {
	const [signUp, { data, isLoading, isError }] = useSignUpMutation()
	const { setCredentials } = useActions()

	const handleSignUp = async (username: string, password: string) => {
		await signUp({ username, password })
	}

	useEffect(() => {
		if (data) {
			setCredentials({ accessToken: data.access, refreshToken: data.refresh })
		}
	}, [data])

	return {
		handleSignUp,
		isLoading,
		isError,
	}
}

export default useSignUp
