import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Barchart from './Barchart.js'
//import gkeImage from "/Users/rajvibagohil2411/Desktop/Cloudmon-React/cloudmon-demo/src/images/cards/gke.png";


export default function BarchartCard(props) {
    console.log(props);
    return (
        <Card sx={{ height: 400 }}>
            <Typography gutterBottom variant="h7" component="div">
                <div className='flex-parent-element'>
                    <div style={{ paddingTop: '10px' }}>
                        <p>{props.title}t</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <p style={{ paddingTop: '10px' }}>Detail View</p>
                        <IconButton >
                            <ChevronRightIcon />
                        </IconButton>
                    </div>
                </div>


                <hr></hr>
            </Typography>


            <Barchart />







        </Card>
    );
}