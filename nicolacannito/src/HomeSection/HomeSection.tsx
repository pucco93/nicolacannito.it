import React, { useState, useEffect } from 'react';
import useStyles from './HomeSection.styles';
import { useTransition, useTrail, animated, interpolate, config } from 'react-spring';
import { Icons } from './Icons';
import { HomeButtons } from './HomeButtons';
import Theme from '../models/Theme';


export interface IHomeSectionProps {
    titleTransition: boolean;
    changePage: (workValue: string) => void;
    theme: Theme;
}

const slide0 = require('../images/26182021_328792247622150_7694016409898057728_n.jpg');
const slide1 = require('../images/29714841_210837386351112_5832599591224082432_n.jpg');
const slide2 = require('../images/31977747_184004115594040_6407179564463685632_n.jpg');
const slide3 = require('../images/35617598_260202887890928_1558943008118800384_n.jpg');

const slides = [
    { id: 0, url: slide0 },
    { id: 1, url: slide1 },
    { id: 2, url: slide2 },
    { id: 3, url: slide3 },
];

const HomeSection = (props: IHomeSectionProps) => {
    let { backgroundImgHome, paddingTop, mainTitleName, adjectives } = useStyles(props);

    const items = ['Nicola Cannito'];
    const [index, setIndex] = useState<number>(0);
    const transitions = useTransition(slides[index], slide => slide.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });

    const configTitles = { duration: 600, mass: 1, tension: 200, friction: 100 };

    const trail = useTrail(items.length, {
        configTitles,
        opacity: props.titleTransition ? 1 : 0,
        x: props.titleTransition ? 0 : 20,
        height: props.titleTransition ? 120 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });
    
    const openWorks = () => {
        props.changePage('Works');
    };

    const openBlog = () => {
        // props.changePage('Blog');
    };

    useEffect(() => void setInterval(() => setIndex(state => (state + 1) % 4), 2000), []);

    return(
        <>
            { transitions.map(({ item, props, key }) => (
                <animated.div
                    key={ key }
                    className={ backgroundImgHome }
                    style={{ ...props, background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${item.url}")` }}
                />
            ))}
            <div className={ paddingTop } >
                { trail.map(({ x, height, opacity }, index) => (
                    <animated.div key={items[index]}
                        className={ mainTitleName }
                        style={{
                            opacity: 1,
                            transform: interpolate([],
                                (x: number) => `translate3d(0,${x}px,0)`
                            )
                        }}
                    >
                        <animated.div style={{ height, opacity }}>{items[index]}</animated.div>
                    </animated.div>
                ))}
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