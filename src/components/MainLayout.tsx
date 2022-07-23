import { Outlet } from 'react-router-dom'

import Header from './Header'

const MainLayout = () => {
	return (
		<>
			<Header />
			<main className='container mx-auto max-w-[760px] pt-5'>
				<Outlet />
			</main>
		</>
	)
}

export default MainLayout
