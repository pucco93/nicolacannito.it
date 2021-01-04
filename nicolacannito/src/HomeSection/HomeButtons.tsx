import React from 'react';
import useStyles from './HomeButtons.styles';
import { Theme } from '../models/index';
import { NavLink } from 'react-router-dom';

export interface IHomeButtonsProps {
  theme: Theme;
}

export const HomeButtons = (props: IHomeButtonsProps) => {
  let { 
    buttons, 
    workButton, 
    blogButton,
    aboutButton 
  } = useStyles(props);
    
  const openWorks = () => {
    window.open("https://www.youtube.com/playlist?list=PLc0sxwRljI31iFHfKbBW-4q0qD1QAmR_K");
  };

  return (
    <div className={ buttons }>
      <div className={ workButton } onClick={ openWorks }>works</div>
      <NavLink className={ blogButton } to="/Blog" >blog</NavLink>
      <NavLink className={ aboutButton } to="/About" >about</NavLink>
    </div>
  );
}