import React, { Component } from 'react';
import './App.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from './images/logo-transp.png';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal'
import { orange } from '@material-ui/core/colors';

const styles = theme => ({
    indicator: {
        backgroundColor: teal[500]
    },
    label: {
        color: '#000'
    }
});

const orangeSecondary = orange[400];

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };


    render() {
        const { classes } = this.props;

        return (
            <div className="mainNav">
                <Paper>
                    <AppBar position="static">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            centered
                            indicatorColor={`${orange}`}
                            inkBarStyle={{ backgroundColor: '#e65100' }}
                            inkBarContainerStyle={{ background: '#e65100' }}
                        >
                            <Tab classes={{ label: classes.label }} label="Home" />
                            <Tab classes={{ label: classes.label }} label="About" />
                            <Tab classes={{ label: classes.label }} label="Work" />
                        </Tabs>
                    </AppBar>
                    <img src={logo} alt="Logo" className="logo"></img>
                </Paper>
            </div>

        );
    }
}

export default withStyles(styles)(Header);