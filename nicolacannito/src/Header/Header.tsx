import React, { useState } from 'react';
import styles from './Header.module.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../images/logo-transp.png';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
export interface IHeaderProps {

}

export const Header = (props: IHeaderProps) => {
    const [ value, setValue ] = useState("Home");

    const handleChange = (event: React.ChangeEvent<{}>, newValue: any): void => {
        debugger;
        setValue(newValue);
    };

    return (
        <div className={ styles.mainNav }>
            <Paper>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        centered={true}
                        // indicatorColor={`${orange}`}
                        // inkBarStyle={{ backgroundColor: '#e65100' }}
                        // inkBarContainerStyle={{ background: '#e65100' }}
                    >
                        <Tab label="Home" value={"Home"} />
                        <Tab label="About" value={"About"} />
                        <Tab label="Work" value={"Work"} />
                    </Tabs>
                </AppBar>
                <img src={logo} alt="Logo" className={styles.logo}></img>
            </Paper>
        </div>

    );
}

