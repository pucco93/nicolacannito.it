import React, { useState, useEffect } from 'react';
import useStyles from './Input.styles';
import * as models from '../../../models/index';

export interface IInputProps {
    theme: models.Theme;
    updateForm: (newForm: models.Form) => void;
    form: models.Form;
    property: "name" | "surname" | "mail" | "title" | "description"; // TypeScript here wants to be sure that the string would be one of the five property from FormModel, so I had to say it esplicitly.
    isDescription: boolean;
}

const Input = (props: IInputProps) => {
    let {
        container,
        label,
        input,
        inputContainer
    } = useStyles(props);
    const [focus, updateFocus] = useState<boolean>(false)

    const _updateForm = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newForm: models.Form = props.form;
        let property = props.property;
        newForm[property] = event.target.value;
        props.updateForm(newForm);
    };

    const _focus = () => {
        updateFocus((previous : any) => !previous);
    };

    const _createLabel = () => {
        switch(props.property) {
            case 'name': 
                return "Inserisci il tuo nome*";
            case 'surname': 
                return "Inserisci il tuo cognome*";
            case 'mail': 
                return "Inserisci la tua mail*";
            case 'title': 
                return "Inserisci il titolo del messaggio*";
            case 'description': 
                return "Scrivi il testo del messaggio";
        }
    };

    const _createExample = () => {
        switch(props.property) {
            case 'name': 
                return "Mario";
            case 'surname': 
                return "Rossi";
            case 'mail': 
                return "esempio@mail.com";
            case 'title': 
                return "Titolo del messaggio";
            case 'description': 
                return "Write some infos, maximum 5000 characters.";
        }
    };

    return (
        <div className={ container }>
            <label className={ label }>
                { _createLabel() }
            </label>
            <div className={ inputContainer } >
                <textarea
                    className={ input } 
                    onChange={ _updateForm } 
                    placeholder={ _createExample() }
                    rows={ props.isDescription ? 5 : 1 }
                    onFocus={ _focus }
                ></textarea>
            </div>
        </div>
    );
};

export default Input;