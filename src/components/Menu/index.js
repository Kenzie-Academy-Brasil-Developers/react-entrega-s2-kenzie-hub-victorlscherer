import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MenuItem } from '@mui/material';
import { useHistory } from 'react-router';

const Menu = () => {

    const history = useHistory();

    const linkTo = (path) => {
        history.push(path)
    }

    return (
        <AppBar >
            <Toolbar position="static">
                <MenuItem onClick={() => { linkTo("/home") }} >Home</MenuItem>
                <MenuItem onClick={() => { linkTo("/") }} >Register</MenuItem>
                <MenuItem onClick={() => { linkTo("/login") }} >Login</MenuItem>
            </Toolbar>
        </AppBar>
    );
}

export default Menu;