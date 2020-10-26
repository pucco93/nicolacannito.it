import React, { useState } from 'react';
import useStyles from './Icons.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,
    faYoutube,
    faTwitter,
    faInstagram,
    faVimeoV
} from '@fortawesome/free-brands-svg-icons';
import Theme from '../models/Theme';

export interface IIconsProps {
  theme: Theme;
}

export const Icons = (props: IIconsProps) => {
  let { socialIconsContainer, circleContainer, icon } = useStyles(props);

  return (
    <div className={ socialIconsContainer }>
      <div className={ circleContainer }>
        <FontAwesomeIcon icon={ faFacebookF } className={ icon } />
      </div>
      <div className={ circleContainer }>
        <FontAwesomeIcon icon={ faYoutube } className={ icon } />
      </div>
      <div className={ circleContainer }>
        <FontAwesomeIcon icon={ faTwitter } className={ icon } />
      </div>
      <div className={ circleContainer }>
        <FontAwesomeIcon icon={ faInstagram } className={ icon } />
      </div>
      <div className={ circleContainer }>
        <FontAwesomeIcon icon={ faVimeoV } className={ icon } />
      </div>
    </div>
  );
}