import Image from 'next/image'
import React, {FC} from 'react'

import { HeaderData } from '../../appData/Header/Header'

import style from './Header.module.scss'

export default function Header() {

    const setMenuList = ():JSX.Element[] =>{
        return HeaderData.navList.map((item:string, index:number)=>{
            return <li key={index} className={style["header-menu__item"]}>{item}</li>
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