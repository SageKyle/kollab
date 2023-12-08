import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div>
			<h1>This is the home page</h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
				nisi quod nesciunt. Voluptates, libero. Omnis illum eos dolorum neque
				iste explicabo! Aut voluptatum, doloremque corrupti sequi provident
				optio molestias adipisci asperiores quis aliquid assumenda sed commodi,
				vero similique dolor! Unde!
			</p>
			<Link to={'/dashboard/profile'}>Profile</Link>
		</div>
	)
}
