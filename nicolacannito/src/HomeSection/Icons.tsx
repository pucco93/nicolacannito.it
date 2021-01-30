import React, { useState } from 'react';
import useStyles from './Icons.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,
    faYoutube,
    faTwitter,
    faInstagram,
    faVimeoV
} from '@fortawesome/free-brands-svg-icons';
import { Theme } from '../models/index';
import { useTransition, animated } from 'react-spring';

export interface IIconsProps {
  theme: Theme;
}

export const Icons = (props: IIconsProps) => {
  let { socialIconsContainer, circleContainer, icon } = useStyles(props);

  const items: { id: number, title: string }[] = [
    { id: 0, title: 'facebook' },
    { id: 1, title: 'youtube' },
    { id: 2, title: 'twitter' },
    { id: 3, title: 'instagram' },
    { id: 4, title: 'vimeo' }
  ];

  const [iconsItems, set] = useState([...items]);
  const transitions = useTransition(iconsItems, (item: { id: number, title: string }) => item.id, {
    from: { transform: 'translate3d(-90px, 0, 0)' },
    enter: { transform: 'translate3d(0, 0, 0)' },
  });

  const openFacebook = () => {
    window.open("https://www.facebook.com/nicolacannitofilm", "_blank");
  };

  const openYoutube = () => {
    window.open("https://www.youtube.com/nicolacannito", "_blank");
  };

  const openTwitter = () => {
    window.open("https://twitter.com/nicolacannito", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/nicola.cannito/", "_blank");
  };

  const openVimeo = () => {
    window.open("https://vimeo.com/nicolacannito", "_blank");
  };

  const correctIcon = (title: string) => {
    switch(title) {
      case 'facebook':
        return(
          <div className={ circleContainer } onClick={ openFacebook } >
            <FontAwesomeIcon icon={ faFacebookF } className={ icon } />
          </div>
        );
      case 'youtube':
        return(
          <div className={ circleContainer } onClick={ openYoutube } >
            <FontAwesomeIcon icon={ faYoutube } className={ icon } />
          </div>
        );
      case 'twitter':
        return(
          <div className={ circleContainer } onClick={ openTwitter } >
            <FontAwesomeIcon icon={ faTwitter } className={ icon } />
          </div>
        );
      case 'instagram':
        return(
          <div className={ circleContainer } onClick={ openInstagram } >
            <FontAwesomeIcon icon={ faInstagram } className={ icon } />
          </div>
        );
      case 'vimeo':
        return(
          <div className={ circleContainer } onClick={ openVimeo } >
            <FontAwesomeIcon icon={ faVimeoV } className={ icon } />
          </div>
        );
    }
  };

  return (
    <div className={ socialIconsContainer }>
      { transitions.map(({ item, props, key }) => {
          return(
            <animated.div key={ key } style={ props }>
              { correctIcon(item.title) }
            </animated.div>
          )
        })
      }
    </div>
  );
}