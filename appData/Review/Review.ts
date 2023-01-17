import content from '*.png'

import image_1 from '../../images/review/image_1.png'
import image_2 from '../../images/review/image_2.png'
import image_3 from '../../images/review/image_3.png'

export interface IReviewPeople {
    title: string,
    description: string,
    image: typeof content,
}

export interface IReview {
    title: string,
    people: IReviewPeople[],
}

export const ReviewData: IReview = {
    title: 'Review',
    people: [
        {
            title: 'Best courses ever',
            description: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
            image: image_1,
        },
        {
            title: 'Amazing teaching',
            description: `The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.`,
            image: image_2,
        },
        {
            title: 'Simple and easy',
            description: 'I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.',
            image: image_3,
        },
    ]
}