import React, { useState } from 'react';
import styles from './HomeSection.module.scss';
import { useTrail, animated, interpolate } from 'react-spring';
import { Icons } from './Icons';
import { HomeButtons } from './HomeButtons';


export interface IHomeSectionProps {
    titleTransition: boolean;
    changePage: (workValue: string) => void;
}

export const HomeSection = (props: IHomeSectionProps) => {

    const items = ['Nicola Cannito'];

    const config = { duration: 600, mass: 1, tension: 200, friction: 100 };

    const trail = useTrail(items.length, {
        config,
        opacity: props.titleTransition ? 1 : 0,
        x: props.titleTransition ? 0 : 20,
        height: props.titleTransition ? 120 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });
    
    const openWorks = () => {
        props.changePage('Works');
    }

    const openBlog = () => {

    }

    return(
        <div className={ styles.backgroundImgHome } >
            <div className={ styles.paddingTop } >
                { trail.map(({ x, height, opacity }, index) => (
                    <animated.div key={items[index]}
                    className={ styles.mainTitleName }
                    style={{
                        opacity: 1,
                        transform: interpolate([],
                        x => `translate3d(0,${x}px,0)`
                        )
                    }}>
                        <animated.div style={{ height, opacity }}>{items[index]}</animated.div>
                    </animated.div>
                ))}
            </div>
            <div className={ styles.adjectives }>Videomaker</div>
            <HomeButtons openWorks={ openWorks } openBlog={ openBlog } />
            <Icons />
        </div>
    );
}