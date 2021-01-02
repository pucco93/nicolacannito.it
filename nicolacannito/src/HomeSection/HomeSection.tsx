import React, { useState, useEffect } from 'react';
import useStyles from './HomeSection.styles';
import { useTransition, useTrail, animated, interpolate, config } from 'react-spring';
import { Icons } from './Icons';
import { HomeButtons } from './HomeButtons';
import { Theme, Slide } from '../models/index';


export interface IHomeSectionProps {
    titleTransition: boolean;
    changePage: (workValue: string) => void;
    theme: Theme;
}

const slide0 = require('../images/26182021_328792247622150_7694016409898057728_n.jpg');
const slide1 = require('../images/29714841_210837386351112_5832599591224082432_n.jpg');
const slide2 = require('../images/31977747_184004115594040_6407179564463685632_n.jpg');
const slide3 = require('../images/35617598_260202887890928_1558943008118800384_n.jpg');

const slides: Slide[] = [
    { id: 0, url: slide0 },
    { id: 1, url: slide1 },
    { id: 2, url: slide2 },
    { id: 3, url: slide3 },
];

const HomeSection = (props: IHomeSectionProps) => {
    let { backgroundImgHome, paddingTop, mainTitleName, adjectives, blackLayer } = useStyles(props);

    const [slidesIndex, set] = useState<number>(0);
    const items: string[] = ['Nicola Cannito'];
    const transitions = useTransition(items, (item: string) => item, {
        from: {  transform: 'translate3d(0, -80px, 0)', opacity: 1 },
        enter: { transform: 'translate3d(0, 0px, 0)', opacity: 1 },
        leave: { transform: 'translate3d(0, -80px, 0)', opacity: 0 }, 
    });
    const slidesTransitions = useTransition(slides[slidesIndex], (slide: Slide) => slide.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });
    
    const openWorks = () => {
        props.changePage('Works');
    };

    const openBlog = () => {
        // props.changePage('Blog');
    };

    useEffect(() => {
        setInterval(
            () => set(state => (state + 1) % 4), 8000);
    }, []);

    return(
        <>
            { slidesTransitions.map(({ item, props, key }) => (
                <animated.div
                    key={ key }
                    className={ backgroundImgHome }
                    style={{ ...props, background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${item.url}")` }}
                >
                    <div className={ blackLayer }></div>
                </animated.div>
            ))}
            <div className={ paddingTop } >
                { transitions.map(({ item, props, key }) =>
                    <animated.div className={ mainTitleName } key={ key } style={ props }>{ item }</animated.div>
                )}
            </div>
            <div className={ adjectives }>Videomaker</div>
            <HomeButtons
                openWorks={ openWorks }
                openBlog={ openBlog }
                theme={ props.theme }
            />
            <Icons 
                theme={ props.theme }
            />
        </>
    );
};

export default HomeSection;