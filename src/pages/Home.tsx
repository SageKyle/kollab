import Footer from '../components/Footer'
import Benefit from '../components/home/Benefit'
import CTA from '../components/home/CTA'
import Features from '../components/home/Features'
import Hero from '../components/home/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
	return (
		<>
			<Navbar />
			<section>
				<Hero />
				<Benefit />
				<Features />
				<CTA />
				<Footer />
			</section>
		</>
	)
}
