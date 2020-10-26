import React, { useState } from 'react';
import useStyles from './HomeButtons.styles';
import Theme from '../models/Theme';

export interface IHomeButtonsProps {
  openWorks: (workValue: string) => void;
  openBlog: () => void;
  theme: Theme;
}

export const HomeButtons = (props: IHomeButtonsProps) => {
  let { buttons, workButton, blogButton } = useStyles(props);

  const openWorks = () => {
    props.openWorks('Work');
  }

  const openBlog = () => {
    // Here will open the Wordpress part
    window.open('#');
  }

  return (
    <div className={ buttons }>
      <div className={ workButton } onClick={ openWorks }>work</div>
      <div className={ blogButton } onClick={ openBlog }>blog</div>
    </div>
  );
}