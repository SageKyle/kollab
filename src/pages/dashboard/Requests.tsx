export default function Requests() {
	return (
		<section
			aria-description="requests page"
			className="w-full p-8 mt-8 mr-10 mb-24 lg:mb-8 rounded grid grid-cols-1 lg:grid-cols-2 gap-4"
		>
			<div className="w-full flex flex-col items-start bg-white shadow-sm rounded justify-start gap-8 md:gap-16">
				<ul className="flex w-full list-none items-center justify-evenly text-black capitalize">
					<li className="font-semibold w-full py-3 text-center border-b-2 border-slate-50 text-primary cursor-pointer">
						sent
					</li>
					<li className="w-full font-normal hover:bg-slate-50 ease-in-out hover:bg-opacity-60 py-3 text-center cursor-pointer">
						received
					</li>
				</ul>
				<div className="w-full list-none flex flex-col gap-2 p-5">
					<li>johndoe</li>
					<li>mickel</li>
					<li>mercy</li>
					<li>miracle</li>
					<li>emmanuel</li>
				</div>
			</div>
			<article className="w-full bg-white p-5 rounded shadow-sm">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eos
					possimus error eveniet iste inventore nemo, adipisci id porro qui!
				</p>
			</article>
		</section>
	)
}
