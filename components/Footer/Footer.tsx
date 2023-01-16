import Image from 'next/image'
import { FC, ReactNode } from 'react'

import { FooterData, IFooterSocialEntry } from '../../appData/Footer/Footer'

import style from './Footer.module.scss'

const Footer: FC = (): JSX.Element => {

    const setCompanyList = (): ReactNode => {
        return FooterData.company.map((item: string, index: number) => {
            return <li key={index} className={style["footer-company__item"]}>{item}</li>
        })
    }

    const setSocialList = (): ReactNode => {
        return FooterData.social.map((item: IFooterSocialEntry, index: number) => {
            return (
                <a href={item.href} key={index} className={style["footer-social__item"]} target="_blank" rel="noopener noreferrer">
                    <Image src={''} alt={'item.href'} {...item.image} />
                </a>
            )
        })
    }

    return (
        <footer className={style["footer"]}>
            <div className="container">
                <div className={style["footer-wrapper"]}>
                    <div className={style["footer__contacts"]}>
                        <div className={style["footer__logo"]}>
                            <Image src={''} alt={'Webtronics logo'} {...FooterData.logo} priority={true} />
                        </div>
                        <a href={FooterData.adress.href} className={style["footer__adress"]} target="_blank" rel="noopener noreferrer">
                            {FooterData.adress.value}
                        </a>
                    </div>
                    <nav className={style["footer-company"]}>
                        <h5 className="title title_footer">Company</h5>
                        <ul className={style["footer-company__list"]}>
                            {setCompanyList()}
                        </ul>
                    </nav>
                    <nav className={style["footer-social"]}>
                        <h5 className="title title_footer">Social media</h5>
                        <ul className={style["footer-social__list"]}>
                            {setSocialList()}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer