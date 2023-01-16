import { FC } from "react";

import { validateShemeFeedback } from "../../interface/validateSheme";

import Form from "../../UI/Form/Form";

import { ContactUsData } from "../../appData/ContactUs/ContactUs";

import style from './ContactUs.module.scss'

const ContactUs: FC = (): JSX.Element => {

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
    }

    return (
        <section className={style["contact-us"]}>
            <div className="container">
                <div className={style["contact-us__block"]}>
                    <div className={style["contact-us__wrapper"]}>
                        <h2 className="title title_contact-us">{ContactUsData.title}</h2>
                        <p className={style["contact-us__description"]}>{ContactUsData.description}</p>
                        <div className={style["contact-us__form"]}>
                            <Form 
                                fields={ContactUsData.fields} 
                                onSubmit={onSubmit} 
                                validateSheme={validateShemeFeedback}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs