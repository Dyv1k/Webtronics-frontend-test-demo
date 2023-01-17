

export interface IStepsBlock {
    title: string,
    description: string,
}

export interface ISteps {
    title: string,
    blocks : IStepsBlock[]
}

export const StepsData: ISteps = {
    title: 'Steps',
    blocks: [
        {
            title: 'Introduction to Front-End',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
        },
        {
            title: 'Introduction to Front-End',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
        },
        {
            title: 'Introduction to Front-End',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
        },
        {
            title: 'Introduction to Front-End',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
        },
        {
            title: 'Introduction to Front-End',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
        },
        {
            title: 'Introduction to Front-End',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
        },
    ]
}