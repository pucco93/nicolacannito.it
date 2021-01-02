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

  const correctIcon = (title: string) => {
    switch(title) {
      case 'facebook':
        return(
          <div className={ circleContainer }>
            <FontAwesomeIcon icon={ faFacebookF } className={ icon } />
          </div>
        );
      case 'youtube':
        return(
          <div className={ circleContainer }>
            <FontAwesomeIcon icon={ faYoutube } className={ icon } />
          </div>
        );
      case 'twitter':
        return(
          <div className={ circleContainer }>
            <FontAwesomeIcon icon={ faTwitter } className={ icon } />
          </div>
        );
      case 'instagram':
        return(
          <div className={ circleContainer }>
            <FontAwesomeIcon icon={ faInstagram } className={ icon } />
          </div>
        );
      case 'vimeo':
        return(
          <div className={ circleContainer }>
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