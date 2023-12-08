import { useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

export default function Footer() {
	const [email, setEmail] = useState('')

	async function handleSubmit() {
		console.log(email)
		alert('form submitted!')
	}

	return (
		<footer className="w-full px-6 sm:px-10 pt-16 pb-8 flex flex-col items-center justify-center gap-8 bg-white lg:px-32 xl:px-40">
			<section className="w-full mx-auto mb-8 flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between">
				<div className="lg:w-1/2 sm:w-4/5 mx-auto lg:mx-0">
					<h4 className="capitalize font-bold text-primary text-2xl mb-4 text-center lg:text-start">
						kollab
					</h4>
					<form
						onSubmit={handleSubmit}
						className="w-full md:w-4/5 md:mx-auto lg:mx-0"
					>
						<p className="text-sm font-mont font-thin text-center lg:text-start">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sunt?
						</p>
						<label className="w-full flex mt-4 h-12">
							<input
								type="text"
								name="email"
								value={email}
								required
								onChange={(e) => setEmail(e.target.value)}
								id="email"
								autoComplete="email"
								placeholder="Enter Email Address"
								className="h-full w-full flex border focus:border-2 focus:outline-none border-primary p-3"
							/>
							<button
								type="button"
								className="capitalize px-6 py-3 text-white bg-primary font-rubik font-medium text-base hover:bg-primary-light ease-in-out duration-200"
							>
								send
							</button>
						</label>
					</form>
				</div>
				<div className="w-fit mt-10 px-10 lg:self-end">
					<h5 className="capitalize font-mont font-light text-lg mb-6">
						contact us
					</h5>
					<div className="flex gap-3 items-center text-2xl text-primary">
						<FaFacebookF className="cursor-pointer" />
						<FaTwitter className="cursor-pointer" />
						<FaLinkedinIn className="cursor-pointer" />
					</div>
				</div>
			</section>
			<p className="text-sm">
				&copy; 2023,{' '}
				<strong className="capitalize font-semibold font-mont">Kollab</strong>
			</p>
		</footer>
	)
}
