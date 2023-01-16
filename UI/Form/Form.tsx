import { FC, ReactNode } from "react";
import { useForm } from 'react-hook-form'
import { OptionalObjectSchema } from "yup/lib/object";
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from "../Input/Input";
import Button from "../Button/Button";

import { IContactUsFields } from "../../appData/ContactUs/ContactUs";

import style from './Form.module.scss'

interface IFormProps {
    fields: IContactUsFields[],
    validateSheme: OptionalObjectSchema<any>,
    onSubmit: (data:any) => void
}

const Form: FC<IFormProps> = ({ fields, validateSheme, onSubmit }): JSX.Element => {

    const userPerm: boolean = true // условное значение, не придумал кейс как контролировать доступ
    // Как сомнительный вариант - задавать в appData, но в таком случае весь смысл статуса теряется

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm({
        resolver: yupResolver(validateSheme)
    })

    const setFileds = (): ReactNode => {
        return fields.map((item: IContactUsFields, index: number) => {
            return (
                <div className={style["form__input"]} key={`${index}${item.name}`}>
                    <Input
                        type={`${item.type}`}
                        error={Boolean(errors[item.name]?.message)}
                        errorMessage={errors[item.name]?.message?.toString()}
                        status={userPerm ? "active" : "disable"}
                        placeholder={item.placeholder}
                        {...register(item.name, { required: true })}
                    />
                </div>
            )
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style["form"]}>
            {setFileds()}
            <div className={style["form__button"]}>
                <Button size="relative" text="Send" type="submit" />
            </div>
        </form>
    )
}

export default Form