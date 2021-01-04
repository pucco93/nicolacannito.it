import React, { useState, useEffect } from 'react';
import useStyles from './App.styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeSection from '../HomeSection/HomeSection';
import AboutSection from '../AboutSection/AboutSection';
import BlogSection from '../BlogSection/BlogSection';
import darkTheme from '../theming/DarkTheme';
import defaultTheme from '../theming/DefaultTheme';
import { Theme, Post } from '../models/index';
import * as manager from '../managers/APIManager';


export interface IAppProps {

}

export const App = (props: IAppProps) => {
    const [titleTransition, setTitleTransition] = useState<boolean>(false);
    const [isDarkTheme, changeTheme] = useState<boolean>(false);
    const [isLoading, updateLoading] = useState<boolean>(false);
    let _theme: Theme = isDarkTheme ? darkTheme : defaultTheme;

    let { container } = useStyles(props);

    useEffect(() => {
        setTitleTransition(true);
    }, []);

    const _getPosts = async () => {
        updateLoading(true);
        let posts: Post[] = [];
        posts = await manager.getPosts();
        updateLoading(false);
        return posts;
    };

    const _changeTheme = () => {
        changeTheme(previous => !previous);
    };

    return (
        <Router>
            <div className={container}>
                <Switch>
                    <Route exact path="/">
                        <HomeSection
                            titleTransition={titleTransition}
                            theme={_theme}
                        />
                    </Route>
                    <Route exact path="/About" >
                        <AboutSection
                            theme={_theme}
                            changeTheme={_changeTheme}
                            isDarkTheme={isDarkTheme}
                        />
                    </Route>
                    <Route exact path="/Blog" >
                        <BlogSection
                            getPosts={_getPosts}
                            changeTheme={_changeTheme}
                            theme={_theme}
                            isDarkTheme={isDarkTheme}
                            isLoading={isLoading}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}