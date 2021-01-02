import React, { useState, useEffect } from 'react';
import useStyles from './App.styles';
import Header from '../Header/Header';
import HomeSection from '../HomeSection/HomeSection';
import { AboutSection } from '../AboutSection/AboutSection';
import { WorksSection } from '../WorksSection/WorksSection';
import darkTheme from '../theming/DarkTheme';
import defaultTheme from '../theming/DefaultTheme';
import Theme from '../models/Theme';
import * as manager from '../managers/APIManager';
import { Post } from '../models/index';


export interface IAppProps {

}

export const App = (props: IAppProps) => {
  const [titleTransition, setTitleTransition] =  useState(false);
  const [page, setPage] = useState('Home');
  const [isDarkTheme, changeTheme] = useState(false);
  let _theme: Theme = isDarkTheme ? darkTheme : defaultTheme;

  let { container } = useStyles(props);

  useEffect(() => {
    setTitleTransition(true);
  }, []);

  const changePage = (newValue: string) => {
    setPage(newValue);
  };

  const _getPosts = async () => {
    let posts: Post[] = [];
    posts = await manager.getPosts();
    return posts;
  }

  let pages: JSX.Element = <HomeSection titleTransition={ titleTransition } changePage={ changePage } theme={ _theme } />;

  if(page === 'About') {
    pages = <AboutSection getPosts={ _getPosts } />;
  } else if(page === 'Work') {
    pages = <WorksSection />;
  }

  return(
    <div className={ container }>
      { pages }
    </div>
  );
}