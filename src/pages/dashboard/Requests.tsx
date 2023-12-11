import { useState } from 'react'
import RequestList from '../../components/request/RequestList'
import { requestType } from '../../lib/types'

type iActiveTab = 'sent' | 'received'

const requests: requestType[] = [
	{ type: 'sent', name: 'this is a sent request', url: 'www.google.com' },
	{ type: 'received', name: 'this is test', url: 'www.google.com' },
	{ type: 'sent', name: 'hi there', url: 'www.google.com' },
	{
		type: 'received',
		name: 'this is a received request',
		url: 'www.google.com',
	},
]

export default function Requests() {
	const [activeTab, setActiveTab] = useState<iActiveTab>('sent')
	const [allRequestsList] = useState(requests)
	const currentRequest = allRequestsList.filter(
		(request) => request.type === activeTab
	)

	function toggleTab(tab: iActiveTab): void {
		setActiveTab(tab)
		console.log('active tab is: ', tab)
	}

	return (
		<section
			aria-description="requests page"
			className="w-full p-8 mt-8 mr-10 mb-24 lg:mb-8 rounded grid grid-cols-1 lg:grid-cols-2 gap-4"
		>
			<div className="w-full flex flex-col items-start bg-white shadow-sm rounded justify-start">
				<ul className="flex w-full list-none items-center justify-evenly text-black capitalize">
					<li
						aria-current={activeTab === 'sent' ? true : false}
						onClick={() => toggleTab('sent')}
						className="font-normal ease-in-out border-b-2 border-white duration-500 w-full py-3 text-center cursor-pointer  hover:bg-opacity-60 aria-[current=true]:font-semibold aria-[current=true]:text-primary aria-[current=true]:border-slate-300"
					>
						sent
					</li>
					<li
						aria-current={activeTab === 'received' ? true : false}
						onClick={() => toggleTab('received')}
						className="font-normal ease-in-out border-b-2 border-white duration-500 w-full py-3 text-center cursor-pointer  hover:bg-opacity-60 aria-[current=true]:font-semibold aria-[current=true]:text-primary aria-[current=true]:border-slate-300"
					>
						received
					</li>
				</ul>
				<RequestList requests={currentRequest} />
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
