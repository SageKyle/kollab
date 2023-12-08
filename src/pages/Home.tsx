import Footer from '../components/Footer'
import Benefit from '../components/home/Benefit'
import CTA from '../components/home/CTA'
import Features from '../components/home/Features'
import Hero from '../components/home/Hero'

export default function Home() {
	return (
		<section>
			<Hero />
			<Benefit />
			<Features />
			<CTA />
			<Footer />
		</section>
	)
}
