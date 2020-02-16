import React, { useState } from 'react';
import styles from './HomeSection.module.scss';

export interface IHomeButtonsProps {
  openWorks: (workValue: string) => void;
  openBlog: () => void;
}

export const HomeButtons = (props: IHomeButtonsProps) => {

  const openWorks = () => {
    props.openWorks('Work');
  }

  const openBlog = () => {
    // Here will open the Wordpress part
    window.open('#');
  }

  return (
    <div className={ styles.buttons }>
      <div className={ styles.workButton } onClick={ openWorks }>work</div>
      <div className={ styles.blogButton } onClick={ openBlog }>blog</div>
    </div>
  );
}