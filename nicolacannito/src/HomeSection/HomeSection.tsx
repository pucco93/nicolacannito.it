import React, { useState } from 'react';
import styles from './HomeSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,
    faYoutube,
    faTwitter,
    faInstagram,
    faVimeoV
} from '@fortawesome/free-brands-svg-icons';
import { CSSTransition } from 'react-transition-group';

export interface IHomeSectionProps {
    titleTransition: boolean;
}

export const HomeSection = (props: IHomeSectionProps) => {

    return(
        <div className={ styles.backgroundImgHome } >
            <CSSTransition in={ props.titleTransition } timeout={ 200 } classNames={{
                appear: styles['appear'],
                appearActive: styles['appearActive'],
                enter: styles['enter'],
                enterActive: styles['enterActive'],
            }}>
                <div className={ styles.mainTitleName }>Nicola Cannito</div>
            </CSSTransition>
            <div className={ styles.adjectives }>&nbsp;Videomaker&nbsp;</div>
            <div className={ styles.buttons }>
                <div className={ styles.workButton }>work</div>
                <div className={ styles.blogButton }>blog</div>
            </div>
            <div className={ styles.socialIconsContainer }>
                <div className={ styles.circleContainer }>
                    <FontAwesomeIcon icon={ faFacebookF } className={ styles.icon } />
                </div>
                <div className={ styles.circleContainer }>
                    <FontAwesomeIcon icon={ faYoutube } className={ styles.icon } />
                </div>
                <div className={ styles.circleContainer }>
                    <FontAwesomeIcon icon={ faTwitter } className={ styles.icon } />
                </div>
                <div className={ styles.circleContainer }>
                    <FontAwesomeIcon icon={ faInstagram } className={ styles.icon } />
                </div>
                <div className={ styles.circleContainer }>
                    <FontAwesomeIcon icon={ faVimeoV } className={ styles.icon } />
                </div>
            </div>
        </div>
    );
}