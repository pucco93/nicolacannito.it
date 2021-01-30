import React, { useState, useEffect } from 'react';
import useStyles from './AboutSection.styles';
import Header from '../Header/Header';
import * as models from '../models/index';
import PageTitle from '../PageTitle/PageTitle';
import Footer from '../Footer/Footer';
import ContactForm from './ContactForm/ContactForm';
import MapsSection from './MapsSection/MapsSection';

export interface IAboutSectionProps {
    changeTheme: () => void;
    theme: models.Theme;
    isDarkTheme: boolean;
    form: models.Form;
    sendForm: () => void;
    updateForm: (newForm: models.Form) => void;
    sent: boolean;
    updateError: (fields: string[]) => void;
    error: string;
}

const AboutSection = (props: IAboutSectionProps) => {
    let {
        page,
        pageBody
    } = useStyles(props);

    const _changeTheme = () => {
        props.changeTheme();
    };

    const _sendForm = () => {
        props.sendForm();
    };

    const _updateForm = (newForm: models.Form) => {
        props.updateForm(newForm);
    };

    const _updateError = (fields: string[]) => {
        props.updateError(fields);
    }

    return (
        <div className={page}>
            <Header
                theme={props.theme}
                changeTheme={_changeTheme}
                isDarkTheme={props.isDarkTheme}
            />
            <div className={ pageBody }>
                <PageTitle 
                    theme={props.theme} 
                    title="About" 
                />
                <MapsSection 
                    theme={ props.theme } 
                />
                <ContactForm 
                    theme={ props.theme }
                    form={ props.form }
                    sendForm={ _sendForm } 
                    updateForm={ _updateForm }
                    sent={props.sent}
                    updateError={_updateError}
                    error={props.error}
                />
            </div>
            <Footer theme={props.theme} />
        </div>
    );
};

export default AboutSection;