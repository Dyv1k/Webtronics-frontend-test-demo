import logo from '../../images/logo/logo.svg'

interface IHeader {
    logo: ImageData,
    navList: string[]

}

export const HeaderData:IHeader = {
    logo: logo,
    navList: ['About', 'Programs', 'Steps', 'Questions', 'Get in touch',]
}