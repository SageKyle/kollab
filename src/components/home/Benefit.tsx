import collaborateIcon from '../../assets/icons/collaboration.svg'
import connectIcon from '../../assets/icons/connect.svg'
import peopleIcon from '../../assets/icons/people_group.svg'

export default function Benefit() {
	return (
		<section className="bg-white w-full px-20 py-24 bg-right bg-no-repeat bg-blend-darken bg-circle-pattern">
			<h3 className="mb-4 font-bold text-xl lg:text-2xl xl:text-3xl text-primary lg:mb-20">
				Benefits of Kollab
			</h3>
			<article className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] mt-16 place-content-center gap-10 w-full">
				<div className="flex flex-col items-center justify-center gap-4 w-full">
					<img
						src={connectIcon}
						className="w-16 object-contain p-4 shadow-md rounded-md"
					/>
					<p className="mt-2 font-mont font-extralight  text-center">
						<strong className="font-semibold">Connect</strong> with industry
						experts and mentors who can help guide you on your professional
						journey.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-3 w-full">
					<img
						src={collaborateIcon}
						className="w-16 object-contain p-4 shadow-md rounded-md"
					/>
					<p className="mt-2 font-mont font-extralight  text-center">
						<strong className="font-semibold">Collaborate</strong> with other
						members on exciting projects and gain valuable experience working in
						a team
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-3 w-full">
					<img
						src={peopleIcon}
						className="w-16 object-contain p-4 shadow-md rounded-md"
					/>
					<p className="mt-2 font-mont font-extralight  text-center">
						<strong className="font-semibold">Expand</strong> your network by
						connecting with like-minded individuals who share your passions and
						interests.
					</p>
				</div>
			</article>
		</section>
	)
}
