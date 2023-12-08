import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<header className="w-full px-10 py-4 flex items-center justify-between gap-4">
			<h1 className="inline-block capitalize font-semibold text-2xl">
				<Link to={'/'} className="">
					kollab
				</Link>
			</h1>
			<nav className="flex gap-3 text-lg capitalize">
				<Link to={'/login'} className="">
					sign in
				</Link>
				<Link to={'/register'} className="">
					create an account
				</Link>
			</nav>
		</header>
	)
}
