import content from '*.svg'

import question from '../../images/faq/question.svg'

export interface IFAQQuestion {
    question: string,
    answer: string,
}

export interface IFAQ {
    title: string,
    image: typeof content,
    description: string,
    questions: IFAQQuestion[]
}

export const FAQData: IFAQ = {
    title: 'Frequently Asked Questions',
    image: question,
    description: 'Do you have any kind of questions? We are here to help.',
    questions: [
        {
            question: 'What is the price?',
            answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
        },
        {
            question: 'What is the price?',
            answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
        },
        {
            question: 'What is the price?',
            answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
        },
        {
            question: 'What is the price?',
            answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
        },
        {
            question: 'What is the price?',
            answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
        },
    ]
}