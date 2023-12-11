import { requestType } from '../../lib/types'

type iProps = {
	requests: requestType[]
}

export default function RequestList({ requests }: iProps) {
	return (
		<div className="w-full h-full list-none flex flex-col items-start justify-start gap-2 p-5">
			{requests.length === 0 && (
				<small className="text-slate-400 text-sm ">
					No requests available in this category
				</small>
			)}
			<ul>
				{requests.map((request) => (
					<li key={request.name}>{request.name}</li>
				))}
			</ul>
		</div>
	)
}
