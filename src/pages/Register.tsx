import { useState } from 'react'

import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Register() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	function toggleShowPassword(): void {
		setShowPassword((prev) => !prev)
	}

	async function handleSubmit() {
		console.log('login successful')
	}

	return (
		<section className="w-full min-h-screen place-content-center grid grid-cols-1 lg:grid-cols-[auto] lg:place-content-stretch relative">
			<article className="hidden lg:flex lg:flex-col lg:fixed w-2/5 h-full px-10 items-start justify-center bg-primary text-white">
				<h1 className="font-bold text-3xl mb-6">Kollab</h1>
				<p className="text-sm text-slate-300 font-mont font-extralight">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
					corporis accusantium nesciunt error perspiciatis! Ipsum fuga fugit.
				</p>
			</article>
			<form
				onSubmit={handleSubmit}
				className="w-full px-10 py-10 bg-white sm:px-20 lg:my-auto lg:w-7/12 lg:ml-auto"
			>
				<h1 className="font-bold text-3xl mb-12 capitalize  text-primary absolute top-6 left-10 lg:hidden">
					kollab
				</h1>
				<h3 className="font-semibold text-xl mb-14 mt-20 lg:mt-0 text-center capitalize lg:text-start text-primary lg:text-3xl">
					create an account
				</h3>
				<label className="w-full flex flex-col mb-8 gap-1">
					<span className="text-xl capitalize font-mont font-light flex gap-2 items-center justify-start">
						First Name
					</span>
					<input
						type="text"
						name="firstName"
						id="firstName"
						required
						autoComplete="on"
						title="First Name"
						className="border-0 outline-none border-b border-primary w-full focus:border-b-2 focus:outline-none "
					/>
				</label>
				<label className="w-full flex flex-col mb-8 gap-1">
					<span className="text-xl capitalize font-mont font-light flex gap-2 items-center justify-start">
						last Name
					</span>
					<input
						type="text"
						name="lastName"
						id="lastName"
						autoComplete="on"
						title="Last Name"
						className="border-0 outline-none border-b border-primary w-full focus:border-b-2 focus:outline-none "
					/>
				</label>
				<label className="w-full flex flex-col mb-8 gap-1">
					<span className="text-xl capitalize font-mont font-light flex gap-2 items-center justify-start">
						email
					</span>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						autoComplete="on"
						title="Email Address"
						className="border-0 outline-none border-b border-primary w-full focus:border-b-2 focus:outline-none "
					/>
				</label>
				<label className="w-full flex flex-col mb-8 gap-1">
					<span className="text-xl capitalize font-mont font-light flex gap-2 items-center justify-start">
						username
					</span>
					<input
						type="text"
						name="username"
						id="username"
						required
						autoComplete="off"
						title="Username"
						className="border-0 outline-none border-b border-primary w-full focus:border-b-2 focus:outline-none "
					/>
				</label>
				<label className="w-full flex flex-col gap-1">
					<span className="text-xl capitalize font-mont font-light flex gap-2 items-center justify-start">
						password
					</span>
					<div className="w-full flex items-center relative">
						<input
							type={`${showPassword ? 'text' : 'password'}`}
							name="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							autoComplete="off"
							title="Password"
							className="border-0 outline-none border-b border-primary w-full focus:border-b-2 focus:outline-none "
						/>
						<span
							onClick={toggleShowPassword}
							className="inline-block absolute right-1 bottom-1/2 text-primary text-2xl cursor-pointer"
							aria-description="toggle password"
						>
							{showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
						</span>
					</div>
				</label>
				<button
					type="submit"
					className="w-full py-3 px-6 mb-6 mt-14 uppercase bg-primary text-white font-rubik [letter-spacing:2px] text-2xl text-center rounded-md hover:bg-primary-light ease-in-out duration-200 cursor-pointer"
				>
					sign up
				</button>
				<div className="grid grid-cols-[1fr_auto_1fr] gap-2 text-red-400 font-rubik w-full items-center mt-6">
					<span
						aria-hidden
						className="inline-block w-full h-[2px] bg-red-200"
					></span>
					<Link
						to={'/login'}
						className="w-full hover:text-red-500 ease-in-out duration-200"
					>
						Already have an account?
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
