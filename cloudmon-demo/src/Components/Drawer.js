import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloudIcon from '@mui/icons-material/Cloud';
import TimelineIcon from '@mui/icons-material/Timeline';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BuildIcon from '@mui/icons-material/Build';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderIcon from '@mui/icons-material/Folder';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { Link } from "react-router-dom"

const drawerWidth = 240;


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        backgroundColor: 'pink',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


export default function MiniDrawer() {

    const [open, setOpen] = React.useState(false);



    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Drawer variant="permanent" open={open} sx={{

            }} >
                <DrawerHeader sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white' }}>
                    <IconButton onClick={handleDrawerClose} >
                        <CloudIcon sx={{ color: '#569fe4' }} />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{ paddingLeft: '8px', backgroundColor: '#569fe4' }} >
                    {['One', 'Two', 'Send email', 'Drafts', 'All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block', color: 'white' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 30,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 1,
                                    color: 'white'
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}
                                >

                                    {(() => {
                                        switch (index % 7) {

                                            case 0: return <Link sx={{ textDecoration: 'none' }} to="/"><TimelineIcon sx={{ color: 'white' }} /></Link>;
                                            case 1: return <Link sx={{ textDecoration: 'none' }} to="/analytics"><AnalyticsIcon sx={{ color: 'white' }} /></Link>;
                                            case 2: return <Link sx={{ textDecoration: 'none' }} to="/settings"><BuildIcon sx={{ color: 'white' }} /></Link>;
                                            case 3: return <VerifiedUserIcon />
                                            case 4: return <SettingsIcon />
                                            case 5: return <FolderIcon />
                                            default: return <PermPhoneMsgIcon />;
                                        }
                                    })()}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List >



            </Drawer>

        </Box>
    );
}





