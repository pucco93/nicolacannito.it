import React, { useState, useEffect } from 'react';
import useStyles from './Footer.styles';
import * as models from '../models/index';

export interface IFooterProps {
    theme: models.Theme;
}

const Footer = (props: IFooterProps) => {
    let {
        footerContainer,
        titleName,
        flexContainer,
        address,
        openingHours
    } = useStyles(props);

    return (
        <>
            <div className={ footerContainer }>
                <div className={ titleName }>
                    All rights reserved © 2020 Nicola Cannito
                </div>
                <div className={ flexContainer }>
                    <div className={ address }>
                        <p>
                            Corso Vittorio Emanuele 0
                        </p>
                        <p>
                            Bari (BA) 70122
                        </p>
                        <p>
                            Italy
                        </p>
                    </div>
                    <div className={ openingHours }>
                        <p>
                            Lunedì - Venerdì
                        </p>
                        <p>
                            9:00 - 18:00
                        </p>
                        <p>
                            Chiuso Sabato &#38; Domenica
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;