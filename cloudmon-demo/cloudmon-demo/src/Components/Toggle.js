import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';

export default function ToggleButtons() {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"


        >
            <ToggleButton style={{ color: 'white', borderColor: 'grey' }}>
                <Typography style={{ textTransform: 'none', fontWeight: 'bold' }}>Computer Savings</Typography>
            </ToggleButton>
            <ToggleButton style={{ color: 'white', borderColor: 'grey' }}>
                <Typography style={{ textTransform: 'none', fontWeight: 'bold' }}>Database Savings</Typography>
            </ToggleButton>
            <ToggleButton style={{ color: 'white', borderColor: 'grey' }}>
                <Typography style={{ textTransform: 'none', fontWeight: 'bold' }}>Data Savings</Typography>
            </ToggleButton>
            <ToggleButton style={{ color: 'white', borderColor: 'grey' }}>
                <Typography style={{ textTransform: 'none', fontWeight: 'bold' }}>Network Savings</Typography>
            </ToggleButton>
            <ToggleButton style={{ color: 'white', borderColor: 'grey' }}>
                <Typography style={{ textTransform: 'none', fontWeight: 'bold' }}>Storage Savings</Typography>
            </ToggleButton>
            <ToggleButton disabled style={{ color: 'white', borderColor: 'grey' }} >
                <Typography style={{ textTransform: 'none', fontWeight: 'bold' }}>Other Savings</Typography>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}