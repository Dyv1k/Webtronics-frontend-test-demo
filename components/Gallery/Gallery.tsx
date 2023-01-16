import { FC, ReactNode } from 'react'
import content from '*.png'
import Image from 'next/image'

import { GalleryData } from '../../appData/Gallery/Gallery'

import style from './Gallery.module.scss'

const Gallery: FC = (): JSX.Element => {

    const setGalleryDescription = (): ReactNode => {
        return GalleryData.description.map((item: string, index: number) =>{
            return <p className={style["gallery__description"]} key={index}><span>{item}</span></p>
        })
    }

    const setGalleryImages = (): ReactNode => {
        return GalleryData.images.map((item: typeof content, index: number) =>{
            return (
                <div className={style["gallery__image"]} key={index}>
                    <Image alt={`developer ${index+1}`} src={item.src} width={item.width} height={item.height}/>
                </div>
            )
        })
    }

    return (
        <section className={style["gallery"]}>
            <div className="container">
                <h2 className="title title_gallery">{GalleryData.title}</h2>
                <div className={style["gallery__wrapper"]}>
                    {setGalleryDescription()}
                    {setGalleryImages()}
                </div>
            </div>
            <div className={style["gallery__test"]}></div>
        </section>
    )
}

export default Gallery