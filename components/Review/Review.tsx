import Image from 'next/image'
import { FC, ReactNode, useState } from 'react'
import { IReview } from '../../appData/Review/Review'

import arrow_img from '../../images/review/arrow.svg'

import style from './Review.module.scss'

const Review: FC<{ data: IReview }> = ({ data }): JSX.Element => {

    const [activeSlide, setActiveSlide] = useState<number>(0)

    const setReviewComment = (): ReactNode => {
        return (
            <div className={style["review-comment"]}>
                <h4 className="title title_review">{data.people[activeSlide].title}</h4>
                <p className={style["review-comment__description"]}>{data.people[activeSlide].description}</p>
            </div>
        )
    }

    const setCurrentSlide = (slide: number): void => {
        if (activeSlide + slide >= 0) {
            if (activeSlide + slide <= data.people.length - 1) {
                setActiveSlide(activeSlide + slide);
            }
            else if (slide === 2) {
                setActiveSlide(Math.abs(activeSlide + 1 - (data.people.length - 1)));
            }
            else {
                setActiveSlide(0);
            }
        }
        else {
            setActiveSlide(data.people.length - 1);
        }
    }

    return (
        <section className={style["review"]} id='review'>
            <div className="container">
                <h2 className="title title_review">{data.title}</h2>
                <div className={style["review__wrapper"]}>
                    {setReviewComment()}
                    <div className={style["review-gallery"]}>
                        <div className={style["review-gallery-control"]}>
                            <p className={style["review-gallery-control__counter"]}>
                                <span>{activeSlide + 1}/</span>
                                <span>{data.people.length}</span>
                            </p>
                            <div className={style["review-gallery-control__pagination"]}>
                                <div className={`${style["review-gallery-control__arrow"]} ${style["review-gallery-control__arrow_left"]}`} onClick={() => setCurrentSlide(-1)}>
                                    <Image alt={'pagination left'} {...arrow_img} />
                                </div>
                                <div className={`${style["review-gallery-control__arrow"]} ${style["review-gallery-control__arrow_right"]}`} onClick={() => setCurrentSlide(1)}>
                                    <Image alt={'pagination right'} {...arrow_img} />
                                </div>
                            </div>
                        </div>
                        <div className={style["review-gallery__wrapper"]}>
                            <div className={`${style["review-gallery__image_large"]} ${style["review-gallery__image"]}`}>
                                <Image alt={data.people[activeSlide].title} {...data.people[activeSlide].image} />
                            </div>
                            <div className={`${style["review-gallery__image_small"]} ${style["review-gallery__image"]}`} onClick={() => setCurrentSlide(1)}>
                                <Image
                                    alt={activeSlide + 1 <= data.people.length - 1 ? data.people[activeSlide + 1].title : data.people[0].title}
                                    {...data.people[activeSlide + 1 <= data.people.length - 1 ? activeSlide + 1 : 0].image}
                                />
                            </div>
                            <div className={`${style["review-gallery__image_small"]} ${style["review-gallery__image"]}`} onClick={() => setCurrentSlide(2)}>
                                <Image
                                    alt={data.people[activeSlide + 2 <= data.people.length - 1 ? activeSlide + 2 : Math.abs(activeSlide + 1 - (data.people.length - 1))].title}
                                    {...data.people[activeSlide + 2 <= data.people.length - 1 ? activeSlide + 2 : Math.abs(activeSlide + 1 - (data.people.length - 1))].image}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review