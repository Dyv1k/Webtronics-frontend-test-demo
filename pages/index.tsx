import Image from 'next/image'

import MainLayout from '../layouts/MainLayout'

import Preview from '../components/Preview/Preview'
import AboutUs from '../components/AboutUs/AboutUs'
import Technologies from '../components/Technologies/Technologies'
import Gallery from '../components/Gallery/Gallery'
import ContactUs from '../components/ContactUs/ContactUs'

import styles from '../styles/Home.module.scss'

export default function Home(): JSX.Element {
	return (
		<MainLayout>
			<main className="main container_content">
				<Preview/>
				<AboutUs/>
				<Technologies/>
				<Gallery/>
				<ContactUs/>
			</main>
		</MainLayout>
	)
}
