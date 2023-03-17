import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const crumbnames = {
    'analytics': 'GKE Cost Dashboard',
    'settings': 'Cost Recommendations',
    'SavingCtgMore': 'Computer Savings'

}
export default function CustomSeparator(props) {
    const location = useLocation()
    console.log(location);
    let currentLink = ''

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`
            console.log(crumb)
            console.log(crumbnames[crumb])
            return (

                <div className="crumb" key={crumb}>
                    <Link underline="hover" href={currentLink}><Typography style={{ color: "white", fontSize: "15px", textAlign: "center" }}>{crumbnames[crumb]}</Typography>
                    </Link>
                </div>
            )
        })
    console.log("Crumbs:", crumbs)
    return (


        <Breadcrumbs style={{ marginTop: '-30px' }}
            separator={<NavigateNextIcon fontSize="medium" sx={{
                color: 'white'
            }} />}
            aria-label="breadcrumb"
        >
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 5, marginTop: '0' }}
            >
                <Link href='/' underline="hover"><HomeIcon style={{ color: 'white' }} /></Link>
            </IconButton>
            {crumbs}
        </Breadcrumbs>

    );
}