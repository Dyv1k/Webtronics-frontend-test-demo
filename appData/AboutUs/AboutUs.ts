import content from "*.png"

import WadeWarren_photo from '../../images/aboutUs/WadeWarren.png'
import KristinWatson_photo from '../../images/aboutUs/KristinWatson.png'
import RobertFox_photo from '../../images/aboutUs/RobertFox.png'

export interface IAboutUsMentors {
    image: typeof content,
    title: string,
    description: string
}

export interface IAboutUs {
    title: string,
    description: string,
    mentors: IAboutUsMentors[],
}

export const AboutUsData: IAboutUs = {
    title: 'About Us',
    description: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
    mentors: [
        {
            image: WadeWarren_photo,
            title: 'Wade Warren',
            description: 'Front-end engineers work closely with designers',
        },
        {
            image: KristinWatson_photo,
            title: 'Kristin Watson',
            description: 'Front-end engineers work closely with designers',
        },
        {
            image: RobertFox_photo,
            title: 'Robert Fox',
            description: 'Front-end engineers work closely with designers',
        },
    ]

}