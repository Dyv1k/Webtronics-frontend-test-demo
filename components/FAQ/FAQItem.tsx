import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import { IFAQQuestion } from "../../appData/FAQ/FAQ";

import plus_img from '../../images/faq/plus.svg'
import minus_img from '../../images/faq/minus.svg'
// import subtract from '../../images/faq/subtract.svg'

import style from './FAQ.module.scss'

interface IFAQItem extends IFAQQuestion {
    questionState: [number | boolean, Dispatch<SetStateAction<number | boolean>>],
    index: number,
}

const FAQItem: FC<IFAQItem> = ({ question, answer, index, questionState }): JSX.Element => {

    const [activeQuestion, setActiveQuestion] = questionState

    const setState = (): void =>{
        if (index === activeQuestion) {
            return setActiveQuestion(false)
        }
        else{
            return setActiveQuestion(index)
        }
    }

    return (
        <div
            className={
                activeQuestion === index ?
                    `${style["faq-question"]} ${style["faq-question__active"]}`
                    : style["faq-question"]
            }
        >
            <div className={style["faq-question__top"]}>
                <h4 className="title title_faq-question">{question}</h4>
                <div className={style["faq-question-mark"]} onClick={()=>setState()}>
                    <div className={style["faq-question-mark_active"]}>
                        <Image alt={'open'} {...plus_img}/>
                    </div>
                    <div className={style["faq-question-mark_disable"]}>
                        <Image alt={'close'} {...minus_img}/>
                    </div>
                </div>
            </div>
            <p className={style['faq-question__answer']}>{answer}</p>
        </div>
    )
}

export default FAQItem