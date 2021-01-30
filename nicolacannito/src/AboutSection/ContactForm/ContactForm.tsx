import React, { useState, useEffect } from 'react';
import useMyStyles from './ContactForm.styles';
import * as models from '../../models/index';
import Input from './Input/Input';
import SendButton from './SendButton/SendButton';
import FormModel from '../../models/Form';

export interface IContactFormProps {
    theme: models.Theme;
    form: models.Form;
    sendForm: () => void;
    updateForm: (newForm: models.Form) => void;
    sent: boolean;
    error: string;
    updateError: (fields: string[]) => void;
}

const ContactForm = (props: IContactFormProps) => {
    let {
        contactForm,
        container,
        formOpener,
        sentMailContainer,
        sentMailText,
        errorContainer,
        errorText
    } = useMyStyles(props);
    let inputs: string[] = ["name", "surname", "mail", "title", "description"];

    const _sendForm = () => {
        let fields: string[] = [];
        let property: keyof FormModel;
        for(property in props.form) {
            if(property !== 'description' && props.form[property] === '') {
                fields.push(property);
            }
        }
        if(fields.length > 0) {
            props.updateError(fields);
        } else {
            props.sendForm();
        }
    };

    const _updateForm = (newForm: models.Form) => {
        props.updateForm(newForm);
    };

    const errorView = 
        <div className={errorContainer}>
            <div className={errorText}>
                {props.error}
            </div>
        </div>;

    const sentMail = 
        <div className={sentMailContainer}>
            <div className={sentMailText}>
                Message sent!
            </div>
        </div>;

    return (
        <>
            <div className={ container }>
                <div className={ formOpener } >
                    Vuoi contattarci?
                </div>
            </div>
            <div className={ contactForm }>
                { 
                    inputs.map((input: any, key: number) => {
                        return(
                            <Input 
                                theme={ props.theme }
                                updateForm={ _updateForm } 
                                form={ props.form } 
                                property={ input }
                                isDescription={ input === 'description' }
                                key={ key }
                            />
                        );
                    }) 
                }
                { props.sent ? sentMail : '' }
                { props.error ? errorView : '' }
                { /** animazione per pulsante, elimina la scritta invia e fa comparire una icona delle mail */ }
                <SendButton 
                    theme={ props.theme } 
                    sendForm={ _sendForm }
                    sent={props.sent}
                />
            </div>
        </>
    );
};

export default ContactForm;