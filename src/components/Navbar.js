import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import Twitter from '@material-ui/icons/Twitter';
import Public from '@material-ui/icons/Public';
import React from "react";
import { Avatar } from '@material-ui/core';
import image from '../images/avatar.PNG';

const Navbar = ({ page, changePage }) => {

    return (
        <Box bgcolor='teal'>
            <IconButton><Avatar src={image}></Avatar></IconButton>
            <IconButton onClick={() => changePage('home')}><Home />
            </IconButton>
            <Button onClick={() => changePage('folio')}>Builds</Button>|
            <Button onClick={() => changePage('about')}>About</Button>|
            <Button href='https://twitter.com/hazedflux'>Twitter<Twitter /></Button> |
            <Button href='https://www.planetminecraft.com/member/hazedflux/'>PMC<Public /></Button>
        </Box>

    );
};


export default Navbar;