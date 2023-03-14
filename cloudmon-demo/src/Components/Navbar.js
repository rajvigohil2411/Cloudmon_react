import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import CustomSeparator from './Breadcrumbs.js';



export default function Navbar(props) {



    return (
        <Box >
            <AppBar position="static" style={{ backgroundColor: '#0f2d48', height: '40px', zIndex: '1' }}>
                <Toolbar>
                    <CustomSeparator
                        value1=<IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ ml: 5, marginTop: '0' }}
                        >
                            <HomeIcon style={{ color: 'white' }} />
                        </IconButton>
                        value2=<Typography style={{ color: "white", fontSize: "15px", textAlign: "center" }}>GKE Cost Dashboard</Typography>
                    />

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <b style={{ color: "white", padding: "15px" }}>rajviba.gohil@searce.com</b>&nbsp;&nbsp;&nbsp;&nbsp;

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"

                            aria-haspopup="true"

                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>


        </Box >
    );
}

// <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="open drawer"
//                         sx={{ ml: 5 }}
//                     >
//                         <HomeIcon style={{ color: 'white' }} />
//                     </IconButton>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="open drawer"
//                         sx={{ mr: 2 }}
//                     >
//                         <ChevronRightIcon style={{ color: 'white' }} />&nbsp;&nbsp;&nbsp;&nbsp;
//                     </IconButton>
//                     <Typography style={{ color: "white", fontSize: "15px", textAlign: "center" }}>GKE Cost Dashboard</Typography>
