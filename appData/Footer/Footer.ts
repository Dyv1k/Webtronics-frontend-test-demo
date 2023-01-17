import content from "*.svg"

import logo from '../../images/logo/logo.svg'
import twitter from '../../images/social/twitter.svg'
import facebook from '../../images/social/facebook.svg'
import gitlab from '../../images/social/gitlab.svg'
import linked_in from '../../images/social/linked_in.svg'

export interface IFooterSocialEntry {
    image: typeof content,
    href: string,
}

export interface IFooterNavList {
    title: string,
    href: string,
}

export interface IFooter {
    logo: typeof content,
    adress: {
        href: string,
        value: string,
    },
    navList: IFooterNavList[]
    social: IFooterSocialEntry[]

}

export const FooterData: IFooter = {
    logo: logo,
    adress: {
        href: 'https://goo.gl/maps/8p79ooi94USEcHwMA',
        value: 'Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815',
    },
    navList: [
        {
            title: 'About Us',
            href: 'aboutUs'
        },
        {
            title: 'Steps',
            href: 'steps'
        },
        {
            title: 'FAQs',
            href: 'faq'
        }, 
        {
            title: 'Review',
            href: 'review'
        },  
        {
            title: 'Gallery',
            href: 'gallery'
        },
    ],
    social: [
        {
            image: facebook,
            href: 'https://facebook.com',
        },
        {
            image: gitlab,
            href: 'https://gitlab.com',
        },
        {
            image: twitter,
            href: 'https://twitter.com',
        },
        {
            image: linked_in,
            href: 'https://linkedin.com',
        },
    ]

}