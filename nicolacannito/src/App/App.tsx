import React, { useState } from 'react';
import styles from './App.module.scss';
import { Header } from '../Header/Header';
import { HomeSection } from '../HomeSection/HomeSection';

export interface IAppProps {

}

export const App = (props: IAppProps) => {
  const [titleTransition, setTitleTransition] =  useState(false);

    // this.setState({ titleTransition: true });

  return(
    <div className={ styles.container }>
      <Header />
      <HomeSection titleTransition={ titleTransition } />
    </div>
  );
}