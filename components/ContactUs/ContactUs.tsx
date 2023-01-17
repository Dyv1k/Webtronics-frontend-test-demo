import { FC, useState } from "react";

import Form from "../../UI/Form/Form";

import { validateShemeFeedback } from "../../interface/validateSheme";
import { HTTP } from "../../interface/HTTP";

import { IContactUs } from "../../appData/ContactUs/ContactUs";

import style from './ContactUs.module.scss'

const ContactUs: FC<{data: IContactUs}> = ({data}): JSX.Element => {

    const [fetchStatus, setFetchStatus] = useState(false)

    const onSubmit = async (value: any) => {
        const result = await HTTP.createCallback(value, '/feedback')
        console.log(result)
        if (result){
            alert('Thank you for your feedback!')
            setFetchStatus(true)
        }
        else{
            alert(`Error! Check if the server is on`)
            setFetchStatus(false)
        }
    }

    return (
        <section className={style["contact-us"]} id='contact-us'>
            <div className="container">
                <div className={style["contact-us__block"]}>
                    <div className={style["contact-us__wrapper"]}>
                        <h2 className="title title_contact-us">{data.title}</h2>
                        <p className={style["contact-us__description"]}>{data.description}</p>
                        <div className={style["contact-us__form"]}>
                            <Form 
                                fields={data.fields} 
                                onSubmit={onSubmit} 
                                validateSheme={validateShemeFeedback}
                                fetchState={{fetchStatus, setFetchStatus}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs