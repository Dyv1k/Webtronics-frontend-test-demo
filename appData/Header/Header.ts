import content from "*.svg"

import logo from '../../images/logo/logo.svg'

interface IHeader {
    logo: typeof content,
    navList: string[]

}

export const HeaderData: IHeader = {
    logo: logo,
    navList: ['About', 'Programs', 'Steps', 'Questions', 'Get in touch',]
}