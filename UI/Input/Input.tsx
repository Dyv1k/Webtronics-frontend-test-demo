import { FC, forwardRef } from "react";
import { ChangeHandler, FieldError } from "react-hook-form/dist/types";

import style from './Input.module.scss'

type InputProps = {
    placeholder?: string,
    name: string,
    type?: string,
    status?: 'active' | 'disable'
    error:  boolean,
    errorMessage: string | undefined,
    onChange: ChangeHandler,
    onBlur: ChangeHandler,
    ref: React.Ref<any> | undefined,
}

export const Input:FC<InputProps> = forwardRef((
    {
        placeholder,
        name,
        type = 'text',
        status = 'active',
        error,
        onChange,
        onBlur, 
        errorMessage,
    }, ref): JSX.Element => {

    return (
        <div className={style["input__wrapper"]}>
            <input
                ref={ref}
                className={`${style[`input`]} ${style[`input_${status}`]} ${error ? style[`input_error`] : ''}`}
                type={type}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
            />
            {error? (
                <span className={style["input__error"]}>{errorMessage}</span>
            ) : null}
        </div>
    )
})