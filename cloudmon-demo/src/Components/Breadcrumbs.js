import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator(props) {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            {props.value1}
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            {props.value2}
        </Link>,
        <Typography key="3" color="text.primary">
            {props.value3}
        </Typography>,
    ];

    return (


        <Breadcrumbs style={{ marginTop: '-30px' }}
            separator={<NavigateNextIcon fontSize="medium" sx={{
                color: 'white'
            }} />}
            aria-label="breadcrumb"
        >
            {breadcrumbs}
        </Breadcrumbs>

    );
}