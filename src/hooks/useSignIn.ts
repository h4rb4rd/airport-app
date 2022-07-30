import { useEffect } from 'react'

import { useSignInMutation } from '../services/AirportService'
import { useActions } from './useActions'

const useSignIn = () => {
	const [signIn, { data, isLoading, isError }] = useSignInMutation()
	const { setCredentials } = useActions()

	const handleSignIn = async (username: string, password: string) => {
		await signIn({ username, password })
	}

	useEffect(() => {
		if (data) {
			setCredentials({ accessToken: data.access, refreshToken: data.refresh })
		}
	}, [data])

	return {
		handleSignIn,
		isLoading,
		isError,
	}
}

export default useSignIn
