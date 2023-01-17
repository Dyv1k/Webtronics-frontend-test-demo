import Image from 'next/image'
import { FC, ReactNode } from 'react'
import { Link } from 'react-scroll'
import ScrollLink from '../../UI/ScrollLink/ScrollLink'

import { HeaderData, IHeaderNavList } from '../../appData/Header/Header'

import style from './Header.module.scss'

const Header: FC = (): JSX.Element => {

    const setMenuList = (): ReactNode => {
        return HeaderData.navList.map((item: IHeaderNavList, index: number) => {
            return (
                <li key={index} className={style["header-menu__item"]}>
                    <ScrollLink href={item.href}>{item.title}</ScrollLink>
                </li>
            )
        })
    }

    return (
        <header className={style["header"]}>
            <div className="container">
                <div className={style["header-wrapper"]}>
                    <div className={style["header-logo"]}>
                        <Image src={''} alt={'Webtronics logo'} {...HeaderData.logo} priority={true} />
                    </div>
                    <nav className={style["header-menu"]}>
                        <ul className={style["header-menu__list"]}>
                            {setMenuList()}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header