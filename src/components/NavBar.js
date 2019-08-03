import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { MuiThemeProvider } from 'material-ui/styles';

class NavBar extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar title="Images Finder App" />
            </MuiThemeProvider>
        );
    }
}

export default NavBar;
