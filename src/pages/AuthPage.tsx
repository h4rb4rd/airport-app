import { Navigate } from 'react-router-dom'

import { RouteNames } from '../types'
import SignUpForm from '../components/SignUpForm'
import { useAppSelector } from '../hooks/useAppSelector'
import { useState } from 'react'
import SignInForm from '../components/SignInForm'

const AuthPage = () => {
	const { token } = useAppSelector(state => state.auth)
	const [isHaveAccount, setIsHaveAccount] = useState(false)

	if (token) return <Navigate to={RouteNames.HOME} />

	return (
		<>
			<div className='mb-3'>
				{isHaveAccount ? <SignInForm /> : <SignUpForm />}
			</div>
			{isHaveAccount ? (
				<button onClick={() => setIsHaveAccount(false)}>
					Sign up for account
				</button>
			) : (
				<button onClick={() => setIsHaveAccount(true)}>
					Already have an account? Log in
				</button>
			)}
		</>
	)
}

export default AuthPage
