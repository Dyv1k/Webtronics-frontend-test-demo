import { FC } from 'react'

import MainLayout from '../layouts/MainLayout'

import Preview from '../components/Preview/Preview'
import AboutUs from '../components/AboutUs/AboutUs'
import Technologies from '../components/Technologies/Technologies'
import Steps from '../components/Steps/Steps'
import FAQ from '../components/FAQ/FAQ'
import Review from '../components/Review/Review'
import Gallery from '../components/Gallery/Gallery'
import ContactUs from '../components/ContactUs/ContactUs'

import { AboutUsData } from '../appData/AboutUs/AboutUs'
import { TechnologiesData } from '../appData/Technologies/Technologies'
import { StepsData } from '../appData/Steps/Steps'
import { FAQData } from '../appData/FAQ/FAQ'
import { ReviewData } from '../appData/Review/Review'
import { GalleryData } from '../appData/Gallery/Gallery'
import { ContactUsData } from '../appData/ContactUs/ContactUs'

const Home:FC = (): JSX.Element => {
	
	return (
		<MainLayout>
			<main className="main container_content">
				<Preview/>
				<AboutUs data={AboutUsData}/>
				<Technologies data={TechnologiesData}/>
				<Steps data={StepsData}/>
				<FAQ data={FAQData}/>
				<Review data={ReviewData}/>
				<Gallery data={GalleryData}/>
				<ContactUs data={ContactUsData}/>
			</main>
		</MainLayout>
	)
}

export default Home
