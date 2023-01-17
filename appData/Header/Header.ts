import content from "*.svg"

import logo from '../../images/logo/logo.svg'

export interface IHeaderNavList {
    title: string,
    href: string,
}

export interface IHeader {
    logo: typeof content,
    navList: IHeaderNavList[]

}

export const HeaderData: IHeader = {
    logo: logo,
    navList: [
        {
            title: 'About',
            href: 'aboutUs'
        }, 
        {
            title: 'Programs',
            href: 'technologies'
        }, 
        {
            title: 'Steps',
            href: 'steps'
        }, 
        {
            title: 'Questions',
            href: 'faq'
        }, 
        {
            title: 'Get in touch',
            href: 'contact-us'
        },
    ],
}