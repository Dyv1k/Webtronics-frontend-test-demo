

export interface IContactUsFields {
    name: string,
    type: string,
    placeholder: string,
}

export interface IContactUs {
    title: string,
    description: string,
    fields: IContactUsFields[],
}

export const ContactUsData: IContactUs = {
    title: 'Contact  us',
    description: 'Do you have any kind of help please contact with us.',
    fields: [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Name',
        },
        {
            name: 'phone',
            type: 'number',
            placeholder: 'Phone',
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'E-mail',
        },
    ]
}