import { CiUser } from 'react-icons/ci'
import { FaUsers } from 'react-icons/fa6'
import { HiUserGroup } from 'react-icons/hi'
import { TbMessage } from 'react-icons/tb'
import { TiHomeOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
	return (
		<aside className="p-8 lg:py-16 lg:pr-16 w-full fixed right-0 lg:right-auto lg:sticky lg:top-0 lg:ml-8 lg:mt-8 lg:w-fit bottom-0 left-0 z-10 bg-white text-primary capitalize text-xl flex justify-evenly lg:justify-start lg:flex-col gap-8 rounded-md shadow">
			<NavLink
				to={'/dashboard/home'}
				className="flex gap-4 items-center aria-[current=page]:font-bold aria-[current=page]:text-red-400 group"
			>
				<TiHomeOutline className="group-aria-[current=page]:text-3xl" />
				<span className="hidden lg:inline-block">home</span>
			</NavLink>
			<NavLink
				to={'/dashboard/workspace'}
				className="flex gap-4 items-center aria-[current=page]:font-bold aria-[current=page]:text-red-400 group"
			>
				<HiUserGroup className="group-aria-[current=page]:text-3xl" />
				<span className="hidden lg:inline-block">workspaces</span>
			</NavLink>
			<NavLink
				to={'/dashboard/requests'}
				className="flex gap-4 items-center aria-[current=page]:font-bold aria-[current=page]:text-red-400 group"
			>
				<FaUsers className="group-aria-[current=page]:text-3xl" />
				<span className="hidden lg:inline-block">requests</span>
			</NavLink>
			<NavLink
				to={'/dashboard/messages'}
				className="flex gap-4 items-center aria-[current=page]:font-bold aria-[current=page]:text-red-400 group"
			>
				<TbMessage className="group-aria-[current=page]:text-3xl" />
				<span className="hidden lg:inline-block">messages</span>
			</NavLink>
			<NavLink
				to={'/dashboard/profile'}
				className="flex gap-4 items-center aria-[current=page]:font-bold aria-[current=page]:text-red-400 group"
			>
				<CiUser className="group-aria-[current=page]:text-3xl" />
				<span className="hidden lg:inline-block">profile</span>
			</NavLink>
		</aside>
	)
}
