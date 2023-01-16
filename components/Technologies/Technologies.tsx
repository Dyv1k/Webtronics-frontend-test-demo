import { FC, ReactNode } from 'react'
import Image from 'next/image'

import Subtract from '../../images/technologies/Subtract.svg'

import { TechnologiesData, ITechnologiesStack } from '../../appData/Technologies/Technologies'

import style from './Technologies.module.scss'

const Technologies: FC = (): JSX.Element =>{

    const setTechnologies = (): ReactNode =>{
        return TechnologiesData.stack.map((item:ITechnologiesStack, index: number)=>{
            return (
                <div className={style["technologies-item"]} key={index}>
                    <div className={style["technologies-item__image"]}>
                        <Image alt={`${item.title} image`} {...item.image}/>
                    </div>
                    <h4 className="title title_technologies">{item.title}</h4>
                </div>
            )
        })
    }

    return(
        <section className={style["technologies"]}>
            <div className="container">
                <h2 className="title title_technologies">{TechnologiesData.title}</h2>
                <p className={style["technologies__description"]}>{TechnologiesData.description}</p>
                <div className={style["technologies__wrapper"]}>
                    {setTechnologies()}
                </div>
            </div>
        </section>
    )
}

export default Technologies