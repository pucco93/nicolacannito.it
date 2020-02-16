import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import { Header } from '../Header/Header';
import { HomeSection } from '../HomeSection/HomeSection';
import { AboutSection } from '../AboutSection/AboutSection';
import { WorksSection } from '../WorksSection/WorksSection';

export interface IAppProps {

}

export const App = (props: IAppProps) => {
  const [titleTransition, setTitleTransition] =  useState(false);
  const [page, setPage] = useState('Home');

  useEffect(() => {
    setTitleTransition(true);
  }, []);

  const changePage = (newValue: string) => {
    setPage(newValue);
  }

  let pages: JSX.Element = <HomeSection titleTransition={ titleTransition } changePage={ changePage } />;
  if(page === 'About') {
    pages = <AboutSection />;
  } else if(page === 'Work') {
    pages = <WorksSection />;
  }

  return(
    <div className={ styles.container }>
      <Header changePage={ changePage } />
      { pages }
    </div>
  );
}