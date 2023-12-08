import { Link } from 'react-router-dom'
import heroImg from '../../assets/images/group_hangout.svg'

export default function Hero() {
	return (
		<section className="w-full min-h-screen py-6 flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between bg-cyan-50 px-20">
			<article className="w-full flex flex-col gap-4 justify-start items-start md:w-4/5 md:mx-auto lg:w-1/2">
				<h2 className="mb-4 font-bold text-2xl lg:text-3xl xl:text-5xl text-primary">
					Build meaningful relationships,collaborate with other entrepreneurs
					and achieve your vision.
				</h2>
				<p className="text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
					corporis accusantium nesciunt error perspiciatis! Ipsum fuga fugit
					quisquam velit explicabo? Rem sit nesciunt enim tenetur praesentium,
					iusto consequatur quos consectetur.
				</p>
				<Link
					to={'register'}
					className="capitalize bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light ease-in-out duration-200"
				>
					get started
				</Link>
			</article>
			<div className="w-full md:w-4/5 md:mx-auto lg:w-1/2 italic text-primary">
				<img
					src={heroImg}
					alt=""
					className="w-full h-full object-contain object-center"
				/>
			</div>
		</section>
	)
}
