import { CiUser } from 'react-icons/ci'
import { FaUsers } from 'react-icons/fa6'
import { HiUserGroup } from 'react-icons/hi'
import { TbMessage } from 'react-icons/tb'
import { TiHomeOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'

export default function Sidebar() {
	return (
		<aside className="px-8 min-w-[20%] bg-slate-50 fixed top-0 bottom-0 left-0 z-10">
			<div className="pr-14 pl-8 py-12 mt-28 w-full bg-white text-primary capitalize text-xl flex flex-col gap-8 rounded-md shadow">
				<Link to={'/dashboard/home'} className="flex gap-2 items-center">
					<TiHomeOutline /> home
				</Link>
				<Link to={'/dashboard/workspace'} className="flex gap-2 items-center">
					<HiUserGroup />
					workspaces
				</Link>
				<Link to={'/dashboard/requests'} className="flex gap-2 items-center">
					<FaUsers />
					requests
				</Link>
				<Link to={'/dashboard/messages'} className="flex gap-2 items-center">
					<TbMessage />
					messages
				</Link>
				<Link to={'/dashboard/profile'} className="flex gap-2 items-center">
					<CiUser />
					profile
				</Link>
			</div>
		</aside>
	)
}
