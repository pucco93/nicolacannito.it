import React, { useState } from 'react';
import styles from './Header.module.scss';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface ITabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export const TabPanel = (props: ITabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
      <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
          >
              <Box p={3}>{ children }</Box>
      </Typography>
  );
}