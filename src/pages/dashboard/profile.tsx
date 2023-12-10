import { RiAddCircleFill } from 'react-icons/ri'
import profileAvatar from '../../assets/icons/user.svg'
import { userType } from '../../lib/types'

const sampleUser: userType = {
	firstName: 'John',
	lastName: 'Doe',
	email: 'johndoe@email.com',
	username: 'johnny',
	avatar: profileAvatar,
}

export default function Profile() {
	return (
		<section
			aria-description="profile page"
			className="w-full p-8 mt-8 mr-10 rounded bg-white shadow"
		>
			<div className="w-full flex items-center justify-start gap-8 md:gap-16">
				<div className="text-4xl border-4 border-black rounded-full p-1 object-center object-fill w-24 aspect-square text-primary flex relative">
					<img src={sampleUser.avatar} alt="avatar" />
					<RiAddCircleFill className="inline-block text-2xl z-10 bg-white rounded-full absolute bottom-4 -right-2 cursor-pointer w-6" />
				</div>
				<div className="flex flex-col justify-start items-start gap-0">
					<h4 className="font-semibold text-primary text-xl">{`${sampleUser.firstName} ${sampleUser.lastName}`}</h4>
					<small>@{sampleUser.username}</small>
					<p className="mt-2 font-mont max-w-full text-ellipsis whitespace-nowrap font-extralight">
						{sampleUser.email}
					</p>
				</div>
			</div>
		</section>
	)
}
