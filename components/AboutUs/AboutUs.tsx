import { FC, ReactNode } from 'react'
import Image from 'next/image'

import { AboutUsData, IAboutUsMentors } from '../../appData/AboutUs/AboutUs'

import lines from '../../images/aboutUs/lines.svg'

import style from './AboutUs.module.scss'

const AboutUs: FC = (): JSX.Element =>{

    const setMentors = (): ReactNode =>{
        return AboutUsData.mentors.map((item: IAboutUsMentors, index: number)=>{
            return (
                <div className={style["about-us-mentors-item"]} key={index}>
                    <div className={style["about-us-mentors-item__image"]}>
                        <Image alt={`${item.title} photo`} src={item.image}/>
                    </div>
                    <h4 className="title title_about-us">{item.title}</h4>
                    <p className={style["about-us-mentors-item__description"]}>{item.description}</p>
                </div>
            )
        })
    }

    return(
        <section className={style["about-us"]}>
            <div className="container">
                <h2 className="title title_about-us">{AboutUsData.title}</h2>
                <div className={style["about-us__wrapper"]}>
                    <div className={style["about-us-mentors"]}>
                        <h3 className="title title_about-us">Mentors</h3>
                        <div className={style["about-us-mentors__lines"]}>
                            <Image alt='lines' {...lines}/>
                        </div>
                        <div className={style["about-us-mentors__wrapper"]}>
                            {setMentors()}
                        </div>
                    </div>
                    <p className={style["about-us__description"]}>{AboutUsData.description}</p>
                </div>
            </div>
            <div className={style["about-us__shadow-text"]}>Front</div>
        </section>
    )
} 

export default AboutUs