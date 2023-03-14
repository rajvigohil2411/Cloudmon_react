import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import Linechart from './Linechart.js'
//import gkeImage from "/Users/rajvibagohil2411/Desktop/Cloudmon-React/cloudmon-demo/src/images/cards/gke.png";


export default function LinechartCard(props) {
    console.log(props);
    return (
        <Card sx={{ height: 400 }}>
            <p>{props.title}t</p>
            <div>
                <Linechart />
            </div>



        </Card>
    );
}