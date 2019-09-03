import React, { Component } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

class HomeSection extends Component {
    constructor(props) {
        super(props);
        // let facebookIcon = <FontAwesomeIcon icon={ faFacebook } className="facebookIcon" />;
    }

    render() {

        return(
            <div className="backgroundImgHome" >
                <div class="mainTitleName">Nicola Cannito</div>
                <div class="adjectives">&nbsp;Videomaker&nbsp;</div>
                <div className="buttons">
                    <div className="workButton">work</div>
                    <div className="blogButton">blog</div>
                </div>
                <div className="socialIconsContainer">
                    <div className="circleContainer">
                        <FontAwesomeIcon icon={ faFacebookF } className="facebookIcon" />
                    </div>
                </div>
            </div>
        );
    }

}

export default HomeSection;