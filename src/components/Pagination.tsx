import ReactPaginate from 'react-paginate'
import { AIRPORTS_PAGE_LIMIT } from '../constants'

interface PaginationProps {
	pagesTotalCount: number | undefined
	handlePageClick: (page: number) => void
}

const Pagination = ({
	pagesTotalCount = 0,
	handlePageClick,
}: PaginationProps) => {
	const pagesCount = pagesTotalCount
		? Math.ceil(pagesTotalCount / AIRPORTS_PAGE_LIMIT)
		: 0

	const setPage = ({ selected }: { selected: number }) => {
		handlePageClick(selected + 1)
	}

	return (
		<ReactPaginate
			breakLabel='...'
			nextLabel='next >'
			onPageChange={setPage}
			pageRangeDisplayed={5}
			marginPagesDisplayed={1}
			pageCount={pagesCount}
			previousLabel='< previous'
			breakClassName='pr-2'
			containerClassName='flex py-2 justify-center'
			pageClassName='py-1 px-2 border mr-2'
			previousClassName='py-1 px-2 border mr-2'
			nextClassName='py-1 px-2 border'
			activeClassName='bg-gray-500 text-white'
		/>
	)
}

export default Pagination
