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

interface IFooter {
    logo: typeof content,
    adress: {
        href: string,
        value: string,
    },
    company: string[],
    social: IFooterSocialEntry[]

}

export const FooterData: IFooter = {
    logo: logo,
    adress: {
        href: 'https://goo.gl/maps/8p79ooi94USEcHwMA',
        value: 'Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815',
    },
    company: ['About Us', 'Steps', 'FAQs', 'Review', 'Gallery',],
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