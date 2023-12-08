import { CiLock } from 'react-icons/ci'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function Login() {
	return (
		<section className="w-full min-h-screen place-content-center grid grid-cols-1 lg:grid-cols-[40%_auto] relative">
			<article className="hidden lg:flex lg:flex-col w-full h-full px-10 items-start justify-center bg-primary text-white">
				<h1 className="font-bold text-3xl mb-6">Kollab</h1>
				<p className="text-sm text-slate-300 font-mont font-extralight">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
					corporis accusantium nesciunt error perspiciatis! Ipsum fuga fugit.
				</p>
			</article>
			<form className="w-full px-10 py-10 bg-white sm:px-20 lg:my-auto">
				<h1 className="font-bold text-3xl mb-12 capitalize  text-primary absolute top-6 left-10 lg:hidden">
					kollab
				</h1>
				<h3 className="font-bold text-2xl mb-10 text-center capitalize lg:text-start text-primary lg:text-3xl lg:mb-16">
					login
				</h3>
				<label className="w-full flex flex-col mb-8 gap-1">
					<span className="text-xl capitalize font-mont font-light flex gap-2 items-center justify-start">
						<HiOutlineMail /> email
					</span>
					<input
						type="email"
						name="email"
						id="email"
						required
						title="Email Address"
						className="border-0 outline-none border-b border-primary w-full focus:border-2 focus:outline-none "
					/>
				</label>
				<label className="w-full flex flex-col gap-1">
					<span className="text-xl capitalize font-mont font-light flex gap-2 items-center justify-start">
						<CiLock /> password
					</span>
					<input
						type="password"
						name="password"
						id="password"
						required
						title="Password"
						className="border-0 outline-none border-b border-primary w-full focus:border-2 focus:outline-none "
					/>
				</label>
				<Link
					to={'/iforgot'}
					className="flex text-red-400 ml-auto mr-0 my-4 font-rubik w-fit"
				>
					Forgot password?
				</Link>
				<button
					type="submit"
					className="w-full py-3 px-6 my-6 uppercase bg-primary text-white font-rubik [letter-spacing:2px] text-2xl text-center rounded-md hover:bg-primary-light ease-in-out duration-200 cursor-pointer"
				>
					sign in
				</button>
				<div className="grid grid-cols-[1fr_auto_1fr] gap-2 text-red-400 font-rubik w-full items-center mt-6">
					<span
						aria-hidden
						className="inline-block w-full h-[2px] bg-red-200"
					></span>
					<Link
						to={'/register'}
						className="w-full hover:text-red-500 ease-in-out duration-200"
					>
						Don't have an account?
					</Link>
					<span
						aria-hidden
						className="inline-block w-full h-[2px] bg-red-200"
					></span>
				</div>
			</form>
		</section>
	)
}
