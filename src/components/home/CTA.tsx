import { Link } from 'react-router-dom'
import teamImg from '../../assets/images/engineering_team.png'

export default function CTA() {
	return (
		<section className="relative py-20 after:bg-primary after:absolute after:-z-[1] after:inset-0 after:[clip-path:_polygon(0_60%,_100%_40%,_100%_100%,_0_100%)] after:lg:[clip-path:_polygon(0_52%,_100%_18%,_100%_100%,_0_100%)]">
			<div className="w-full px-6 lg:px-16 xl:px-24">
				<article className="w-full mx-auto py-6 flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-14 lg:px-10">
					<article className="w-full flex flex-col gap-8 justify-start items-center lg:items-start md:w-4/5 md:mx-auto lg:mx-0 lg:w-1/2 xl:w-2/5">
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
							corporis accusantium nesciunt error perspiciatis! Ipsum fuga fugit
							quisquam velit explicabo? Rem sit nesciunt enim tenetur
							praesentium, iusto consequatur quos consectetur.
						</p>
						<Link
							to={'register'}
							className="capitalize border border-red-400 text-red-400 px-4 py-2 rounded-md hover:bg-cyan-50 ease-in-out duration-200"
						>
							get started
						</Link>
					</article>
					<div className="w-full md:w-4/5 md:mx-auto lg:w-1/2 lg:mx-0 xl:w-2/5 italic text-primary">
						<img
							src={teamImg}
							alt=""
							className="w-full shadow-md rounded h-full object-contain object-center"
						/>
					</div>
				</article>
				<article className=" text-white w-full mt-10 pt-12 lg:mt-14 xl:mt-16 lg:px-20 lg:py-24 bg-center bg-cover bg-no-repeat bg-blend-screen bg-circle-pattern flex items-center justify-center lg:gap-10 lg:p-40">
					<div className="w-full md:w-4/5 lg:w-8/12 text-center flex items-center justify-center flex-col mx-auto lg:pl-16">
						<h5 className="font-semibold text-xl mb-6 font-mont">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
							ut.
						</h5>
						<Link
							to={'register'}
							className="capitalize bg-white text-primary px-4 py-2 font-mont font-extralight rounded-md hover:bg-cyan-50 ease-in-out duration-200"
						>
							join now
						</Link>
					</div>
				</article>
			</div>
		</section>
	)
}
