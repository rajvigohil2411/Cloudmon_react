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
            <ToggleButton value="left" aria-label="left aligned">
                <Typography>Computer Savings</Typography>
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
                <Typography>Database Savings</Typography>
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
                <Typography>Data Savings</Typography>
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" disabled>
                <Typography>Network Savings</Typography>
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" disabled>
                <Typography>Storage Savings</Typography>
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" disabled>
                <Typography>Other Savings</Typography>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}