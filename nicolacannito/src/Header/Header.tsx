import React from 'react';
import headerStyles from './Header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,
    faYoutube,
    faTwitter,
    faInstagram,
    faVimeoV
} from '@fortawesome/free-brands-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink } from 'react-router-dom';
import { Theme } from '../models/index';
import ThemeIcon from '../ThemeIcon/ThemeIcon';

export interface IHeaderProps {
    changeTheme: () => void;
    theme: Theme;
    isDarkTheme: boolean;
}

const Header = (props: IHeaderProps) => {
    const { 
        headerBar,
        pages,
        homeLink,
        aboutLink,
        blogLink,
        worksLink,
        icons, 
        facebook, 
        youtube, 
        twitter, 
        instagram, 
        vimeo,
        icon,
        themeIcon
    } = headerStyles(props);


    const _workClick = () => {
        window.open("https://www.youtube.com/playlist?list=PLc0sxwRljI31iFHfKbBW-4q0qD1QAmR_K");
    };

    const _changeTheme = () => {
        props.changeTheme();
    };

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

    return (
        <div className={ headerBar }>
            <div className={ pages }>
                <NavLink to="/" className={ homeLink } >Home</NavLink>
                <NavLink to="/blog" className={ blogLink } >Blog</NavLink>
                <div className={ worksLink } onClick={ _workClick }>Works</div>
                <NavLink to="/about" className={ aboutLink } >About</NavLink>
            </div>
            <div className={ icons }>
                <div className={ facebook } onClick={ openFacebook } >
                    <FontAwesomeIcon icon={ faFacebookF } className={ icon } />
                </div>
                <div className={ youtube } onClick={ openYoutube }>
                    <FontAwesomeIcon icon={ faYoutube } className={ icon } />
                </div>
                <div className={ twitter } onClick={ openTwitter } >
                    <FontAwesomeIcon icon={ faTwitter } className={ icon } />
                </div>
                <div className={ instagram } onClick={ openInstagram } >
                    <FontAwesomeIcon icon={ faInstagram } className={ icon } />
                </div>
                <div className={ vimeo } onClick={ openVimeo } >
                    <FontAwesomeIcon icon={ faVimeoV } className={ icon } />
                </div>
            </div>
            <Tooltip title="Toggle dark mode" aria-label="Toggle dark mode">
                <div className={ themeIcon }>
                        <ThemeIcon 
                            theme={ props.theme }
                            changeTheme={ _changeTheme }
                            internalState={ props.isDarkTheme }
                        />
                </div>
            </Tooltip>
        </div>
    );
};

export default Header;