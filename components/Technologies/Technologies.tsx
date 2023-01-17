import { FC, ReactNode } from 'react'
import Image from 'next/image'

import { ITechnologies, ITechnologiesStack } from '../../appData/Technologies/Technologies'

import style from './Technologies.module.scss'

const Technologies: FC<{ data: ITechnologies }> = ({ data }): JSX.Element => {

    const setTechnologies = (): ReactNode => {
        return data.stack.map((item: ITechnologiesStack, index: number) => {
            return (
                <div className={style["technologies-item"]} key={index}>
                    <div className={style["technologies-item__image"]}>
                        <Image alt={`${item.title} image`} {...item.image} />
                    </div>
                    <h4 className="title title_technologies">{item.title}</h4>
                </div>
            )
        })
    }

    return (
        <section className={style["technologies"]} id='technologies'>
            <div className="container">
                <h2 className="title title_technologies">{data.title}</h2>
                <p className={style["technologies__description"]}>{data.description}</p>
                <div className={style["technologies__wrapper"]}>
                    {setTechnologies()}
                </div>
            </div>
        </section>
    )
}

export default Technologies