import { Link } from 'react-router-dom'
import teamImg from '../../assets/images/engineering_team.png'
import workingImg from '../../assets/images/working_remote.png'

export default function Features() {
	return (
		<section className="bg-primary text-white w-full px-20 py-24 bg-center bg-cover bg-no-repeat bg-blend-screen bg-circle-pattern grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 lg:p-40">
			<h3 className="font-bold text-xl lg:text-2xl xl:text-3xl">
				How it Works
			</h3>
			<p className="w-full font-mont font-extralight lg:pl-16">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla
				cupiditate nostrum libero voluptas odit qui error voluptatem,
				dignissimos tenetur. Amet consequuntur magnam magni veniam illum labore
				laboriosam consectetur consequatur assumenda vel iusto, dicta odit
				corrupti porro eius voluptate exercitationem!
			</p>
			<div className="w-full min-h-[8rem] md:mx-auto mt-10 italic text-white">
				<img
					src={teamImg}
					alt=""
					className="w-full h-full object-contain object-center"
				/>
			</div>
			<div className="w-full lg:my-auto lg:pl-16">
				<h5 className="font-semibold text-xl mb-6 font-rubik">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ut.
				</h5>
				<Link
					to={'register'}
					className="capitalize bg-white text-primary px-4 py-2 font-mont font-extralight rounded-md hover:bg-cyan-50 ease-in-out duration-200"
				>
					join now
				</Link>
			</div>
			<article className="w-full flex flex-col gap-4 justify-start items-start mt-16 lg:my-auto">
				<h5 className="mb-4 font-semibold text-xl lg:text-2xl">
					Build meaningful relationships,collaborate with other entrepreneurs
					and achieve your vision.
				</h5>
				<p className="text-sm text-slate-300 font-mont font-extralight">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
					corporis accusantium nesciunt error perspiciatis! Ipsum fuga fugit.
				</p>
			</article>
			<div className="w-full min-h-[5rem] mt-16 md:pl-16 italic text-white">
				<img
					src={workingImg}
					alt=""
					className="w-full h-full object-contain object-center"
				/>
			</div>
		</section>
	)
}
