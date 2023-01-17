import content from '*.svg'

import angular_img from '../../images/technologies/angular.svg'
import react_img from '../../images/technologies/react.svg'
import vue_img from '../../images/technologies/vue.svg'
import js_img from '../../images/technologies/js.svg'


export interface ITechnologiesStack {
    image: typeof content,
    title: string,
}

export interface ITechnologies {
    title: string,
    description: string,
    stack: ITechnologiesStack[]
}

export const TechnologiesData: ITechnologies = {
    title: 'Programming technologies',
    description: ' By the end, you’ll have the portfolio and interview skills you need to start your new career.',
    stack: [
        {
            image: angular_img,
            title: 'Angular',
        },
        {
            image: react_img,
            title: 'React',
        },
        {
            image: vue_img,
            title: 'Vue.js',
        },
        {
            image: js_img,
            title: 'JavaScript',
        },
    ]
}