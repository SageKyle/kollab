import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<header className="w-full py-6 px-20 flex items-center justify-between gap-4 bg-white z-30 relative">
			<h1
				className="inline-block capitalize font-semibold text-2xl text-primary"
				title="Kollab"
			>
				<Link to={'/'} className="">
					kollab
				</Link>
			</h1>
			<nav className="flex items-center justify-end gap-5 text-lg capitalize">
				<Link to={'/login'} className="">
					sign in
				</Link>
				<Link
					to={'/register'}
					className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light ease-in-out duration-200"
				>
					create account
				</Link>
			</nav>
		</header>
	)
}
