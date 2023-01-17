import Image from 'next/image'
import { FC, ReactNode } from 'react'
import { useState } from 'react'

import FAQItem from './FAQItem'

import { IFAQ, IFAQQuestion } from '../../appData/FAQ/FAQ'

import style from './FAQ.module.scss'

const FAQ: FC<{data: IFAQ}> = ({data}) =>{

    const [activeQuestion, setActiveQuestion] = useState<number | boolean>(0)

    const serQuestions = (): ReactNode => {
        return data.questions.map((item: IFAQQuestion, index: number) =>{
            return (
                <FAQItem 
                    key={index} 
                    question={item.question} 
                    answer={item.answer}
                    questionState={[activeQuestion, setActiveQuestion]}
                    index={index}
                />
            )
        })
    }

    return(
        <section className={style["faq"]} id='faq'>
            <div className="container">
                <h2 className="title title_faq">{data.title}</h2>
                <div className={style["faq__wrapper"]}>
                    <div className={style["faq__block"]}>
                        <div className={style["faq__description"]}>{data.description}</div>
                        <div className={style["faq__image"]}>
                            <Image {...data.image}/>
                        </div>
                    </div>
                    <div className={style["faq__questions"]}>
                        {serQuestions()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ