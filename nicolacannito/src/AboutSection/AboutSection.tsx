import React, { useState, useEffect } from 'react';
import useStyles from './AboutSection.styles';
import Header from '../Header/Header';
import * as models from '../models/index';
import PageTitle from '../PageTitle/PageTitle';

export interface IAboutSectionProps {
  changeTheme: () => void;
  theme: models.Theme;
  isDarkTheme: boolean;
}

const AboutSection = (props: IAboutSectionProps) => {
  let { 
    page,
  } = useStyles(props);

  const _changeTheme = () => {
    props.changeTheme();
  };
  
  return(
    <div className={ page }>
      <Header 
        theme={ props.theme } 
        changeTheme={ _changeTheme }
        isDarkTheme={ props.isDarkTheme }
      />
      <PageTitle theme={ props.theme } title="About" />
    </div>
  );
};

export default AboutSection;