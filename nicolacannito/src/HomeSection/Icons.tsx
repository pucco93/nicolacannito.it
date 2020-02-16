import React, { useState } from 'react';
import styles from './HomeSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,
    faYoutube,
    faTwitter,
    faInstagram,
    faVimeoV
} from '@fortawesome/free-brands-svg-icons';

export interface IIconsProps {

}

export const Icons = (props: IIconsProps) => {

  return (
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
  );
}