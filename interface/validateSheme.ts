import * as Yup from 'yup'

const phone_REG_EXP = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

export const validateShemeFeedback = Yup.object({
    name: Yup.string()
        .max(256,'Field "name" must be 256 characters or less')
        .required('Field name is required'),
    phone: Yup.string()
        .matches(phone_REG_EXP, "Incorrect phone number")
        .required('Field phone is required'),
    email: Yup.string().email('Incorrect email adress')
        .max(256,'Field "email" must be 256 characters or less')
        .required('Field email is required'),  
})