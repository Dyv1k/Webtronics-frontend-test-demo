import { FC, ReactNode } from "react";
import Image from "next/image";

import block_line from '../../images/steps/block_line.svg'
import arrow from '../../images/steps/arrow.svg'

import { IStepsBlock, ISteps } from "../../appData/Steps/Steps";

import style from './Steps.module.scss'

const Steps: FC<{ data: ISteps }> = ({ data }): JSX.Element => {

    const setStepsBlocks = (): ReactNode => {
        return data.blocks.map((item: IStepsBlock, index: number) => {
            if (index % 2 === 0) {
                return (
                    <div className={`${style["steps-item"]} ${style["steps-item_left"]}`} key={index}>
                        <div className={`${style["steps-item__block"]} ${style["steps-item__block_left"]}`}>
                            <div className={`${style["steps-item__line"]} ${style["steps-item__line_left"]}`}>
                                <Image {...block_line} />
                            </div>
                            <h4 className="title title_steps">{`Step ${index+1}`}</h4>
                            <h3 className="title title_steps">{item.title}</h3>
                            <p className={style["steps-item__description"]}>{item.description}</p>
                        </div>
                        <div className={`${style["steps-item-pointer"]} ${style["steps-item-pointer_left"]}`}>
                            <div className={style["steps-item-pointer__arrow"]}>
                                <Image {...arrow}/>
                            </div>
                            <div className={style["steps-item-pointer__circle"]}></div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className={`${style["steps-item"]} ${style["steps-item_right"]}`} key={index}>
                        <div className={`${style["steps-item-pointer"]} ${style["steps-item-pointer_right"]}`}>
                            <div className={style["steps-item-pointer__arrow"]}>
                                <Image {...arrow}/>
                            </div>
                            <div className={style["steps-item-pointer__circle"]}></div>
                        </div>
                        <div className={`${style["steps-item__block"]} ${style["steps-item__block_right"]}`}>
                            <div className={`${style["steps-item__line"]} ${style["steps-item__line_right"]}`}>
                                <Image {...block_line} />
                            </div>
                            <h4 className="title title_steps">{`Step ${index+1}`}</h4>
                            <h3 className="title title_steps">{item.title}</h3>
                            <p className={style["steps-item__description"]}>{item.description}</p>
                        </div>
                    </div>
                )
            }
        })
    }


    return (
        <section className={style["steps"]} id='steps'>
            <div className="container">
                <h2 className="title title_steps">{data.title}</h2>
                <div className={style["steps__wrapper"]}>
                    {setStepsBlocks()}
                </div>
            </div>
        </section>
    )
}

export default Steps