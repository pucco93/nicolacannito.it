import React, { useState } from 'react';
import headerStyles from './Header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,
    faYoutube,
    faTwitter,
    faInstagram,
    faVimeoV
} from '@fortawesome/free-brands-svg-icons';

export interface IHeaderProps {

}

const Header = (props: IHeaderProps) => {
    const [ value, setValue ] = useState("Home");
    const { 
        headerBar, 
        workSection, 
        icons, 
        facebook, 
        youtube, 
        twitter, 
        instagram, 
        vimeo,
        icon
    } = headerStyles(props);

    const _workClick = () => {
        window.open("https://www.youtube.com/playlist?list=PLc0sxwRljI31iFHfKbBW-4q0qD1QAmR_K");
    };

    return (
        <div className={ headerBar }>
            <div className={ workSection } onClick={ _workClick }>Work</div>
            <div className={ icons }>
                <div className={ facebook }>
                    <FontAwesomeIcon icon={ faFacebookF } className={ icon } />
                </div>
                <div className={ youtube }>
                    <FontAwesomeIcon icon={ faYoutube } className={ icon } />
                </div>
                <div className={ twitter }>
                    <FontAwesomeIcon icon={ faTwitter } className={ icon } />
                </div>
                <div className={ instagram }>
                    <FontAwesomeIcon icon={ faInstagram } className={ icon } />
                </div>
                <div className={ vimeo }>
                    <FontAwesomeIcon icon={ faVimeoV } className={ icon } />
                </div>
            </div>
        </div>
    );
};

export default Header;