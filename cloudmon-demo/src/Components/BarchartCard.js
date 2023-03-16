import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Barchart from './Barchart.js'
import BasicSelect from './Dropdown_cluster'
//import gkeImage from "/Users/rajvibagohil2411/Desktop/Cloudmon-React/cloudmon-demo/src/images/cards/gke.png";



export default function BarchartCard(props) {


    return (
        <Card sx={{ height: 420 }}>
            <Typography gutterBottom variant="h7" component="div">
                <div className='flex-parent-element'>
                    <div style={{ paddingTop: '10px' }}>
                        <b>{props.title}</b>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <BasicSelect
                            title={props.detail_view} />

                    </div>
                </div>


                <hr></hr>
            </Typography>


            <Barchart />







        </Card>
    );
}