import React, { Component } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,
    faYoutube,
    faTwitter,
    faInstagram,
    faVimeoV
} from '@fortawesome/free-brands-svg-icons';
import { CSSTransition } from 'react-transition-group';

class HomeSection extends Component {
    constructor(props) {
        super(props);
        // let facebookIcon = <FontAwesomeIcon icon={ faFacebook } className="facebookIcon" />;
    }

    render() {

        return(
            <div className="backgroundImgHome" >
                <CSSTransition in={ this.props.titleTransition } timeout={ 200 } classNames={{
                    appear: 'appear',
                    appearActive: 'appearActive',
                    enter: 'enter',
                    enterActive: 'enterActive',
                }}>
                    <div class="mainTitleName">Nicola Cannito</div>
                </CSSTransition>
                <div class="adjectives">&nbsp;Videomaker&nbsp;</div>
                <div className="buttons">
                    <div className="workButton">work</div>
                    <div className="blogButton">blog</div>
                </div>
                <div className="socialIconsContainer">
                    <div className="circleContainer">
                        <FontAwesomeIcon icon={ faFacebookF } className="icon" />
                    </div>
                    <div className="circleContainer">
                        <FontAwesomeIcon icon={ faYoutube } className="icon" />
                    </div>
                    <div className="circleContainer">
                        <FontAwesomeIcon icon={ faTwitter } className="icon" />
                    </div>
                    <div className="circleContainer">
                        <FontAwesomeIcon icon={ faInstagram } className="icon" />
                    </div>
                    <div className="circleContainer">
                        <FontAwesomeIcon icon={ faVimeoV } className="icon" />
                    </div>
                </div>
            </div>
        );
    }

}

export default HomeSection;