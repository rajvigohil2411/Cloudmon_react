import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import CustomSeparator from './Breadcrumbs.js';
import Avatar from '@mui/material/Avatar';
import image from '/Users/rajvibagohil2411/Desktop/cloudmon_react/Cloudmon_react/cloudmon-demo/src/assets/cards/avatar.jpeg'
import ToggleButton from '@mui/material/ToggleButton';
import { fontFamily } from '@mui/system';


export default function Navbar(props) {
    return (
        <Box >
            <AppBar position="static" style={{ backgroundColor: '#0f2d48', height: '50px', zIndex: '1' }}>
                <Toolbar>

                    <CustomSeparator

                    />


                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'flex' }}>
                        <ToggleButton value="justify" aria-label="justified" disabled >
                            <Typography style={{ color: "white", marginBottom: '5px', textTransform: 'none' }}>rajviba.gohil@searce.com</Typography>
                        </ToggleButton>&nbsp;&nbsp;&nbsp;&nbsp;
                        <IconButton sx={{ p: 0, m: 0, boxSizing: '20px' }}>
                            <Avatar alt="Remy Sharp" src={image} />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>


        </Box>
    );
}
