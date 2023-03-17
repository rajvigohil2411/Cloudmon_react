import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Linechart from './Linechart.js'
//import gkeImage from "/Users/rajvibagohil2411/Desktop/Cloudmon-React/cloudmon-demo/src/images/cards/gke.png";


export default function LinechartCard(props) {
    console.log(props);
    return (
        <Card sx={{ height: 350 }}>
            <Typography gutterBottom variant="h7" component="div">
                <div className='flex-parent-element'>
                    <div style={{ paddingTop: '10px' }}>
                        <b>{props.title}</b>
                    </div>
                    {props.component_name === 'Request vs Consumption' && <div style={{ display: 'flex' }}>
                        <Typography style={{ paddingTop: '10px', fontWeight: 'bold' }}>Detail View</Typography>
                        <IconButton >
                            <ChevronRightIcon />
                        </IconButton>

                    </div>}

                </div>


                <hr style={{ color: 'light-grey' }}></hr>
            </Typography>
            <div>
                <Linechart data={props.data} component_name={props.component_name} />


            </div>



        </Card>
    );
}