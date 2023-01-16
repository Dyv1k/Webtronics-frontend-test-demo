import Image from "next/image"
import { FC } from 'react'

import Button from "../../UI/Button/Button"

import style from './Preview.module.scss'

const Preview: FC = (): JSX.Element => {

    return (
        <section className={style["preview"]}>
            <div className="container">
                <div className={style["preview__content"]}>
                    <h1 className="title title_preview">
                        <span>Front-End </span>
                        <span>Developer</span>
                    </h1>
                    <h3 className="title title_preview">Courses</h3>
                    <div className={style["preview__description"]}>
                        <p>
                            Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).
                        </p>
                    </div>
                    <div className={style["preview__button"]}>
                        <Button size="medium" text="Start my career change" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Preview