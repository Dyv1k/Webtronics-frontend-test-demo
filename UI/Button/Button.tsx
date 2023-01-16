import { FC } from 'react'

import style from './Button.module.scss'

type ButtonProps = {
    size: 'medium' | 'relative',
    text: string,
    color?: 'aqua',
    type?: 'button' | 'submit',
    status?: 'active' | 'disabled'
    callback?: () => {},
}

const Button: FC<ButtonProps> = (
    {
        size,
        text,
        color = 'aqua',
        type = 'button',
        callback,
        status = 'active'
    }
): JSX.Element => {
    return (
        <button
            className={
                `${style[`button`]} ${style[`button_${size}`]} ${style[`button_${color}`]} ${style[`button_${status}`]}`
            }
            type={type}
            onClick={callback}
        >
            {text}
        </button>
    )
}

export default Button