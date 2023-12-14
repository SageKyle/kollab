import { FaArrowLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function FallbackRoute() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function goBack(e: any): void {
		e.preventDefault()
		window.history.back()
	}

	return (
		<main className="w-full h-[80vh] my-auto flex flex-col items-center justify-center text-center p-4">
			<h1 className="text-3xl font-bold lg:text-5xl my-8">404</h1>
			<h3>Oops! The page you're looking for cannot be found.</h3>
			<Link
				to={'/dashboard/profile'}
				className="bg-primary text-white px-4 py-2 rounded-md flex items-center hover:gap-2 hover:bg-primary-light ease-in-out origin-right duration-500 mt-2"
			>
				<FaArrowLeft /> Back to home
			</Link>
			<small className="text-lg my-4 text-slate-500">OR</small>
			<a
				href="#"
				className="underline text-primary inline-block mt-2"
				onClick={goBack}
			>
				back to previous page
			</a>
		</main>
	)
}
