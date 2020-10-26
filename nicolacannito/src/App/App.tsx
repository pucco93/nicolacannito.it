import React, { useState, useEffect } from 'react';
import useStyles from './App.styles';
import Header from '../Header/Header';
import HomeSection from '../HomeSection/HomeSection';
import { AboutSection } from '../AboutSection/AboutSection';
import { WorksSection } from '../WorksSection/WorksSection';
import darkTheme from '../theming/DarkTheme';
import defaultTheme from '../theming/DefaultTheme';
import Theme from '../models/Theme';


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

  let pages: JSX.Element = <HomeSection titleTransition={ titleTransition } changePage={ changePage } theme={ _theme } />;

  if(page === 'About') {
    pages = <AboutSection />;
  } else if(page === 'Work') {
    pages = <WorksSection />;
  }

  return(
    <div className={ container }>
      { pages }
    </div>
  );
}