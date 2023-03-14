import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import Piechart from './Doughnut'
//import gkeImage from "/Users/rajvibagohil2411/Desktop/Cloudmon-React/cloudmon-demo/src/images/cards/gke.png";


export default function DoughnutchartCard(props) {
    console.log(props);
    return (
        <Card sx={{ height: 400 }}>
            <Typography gutterBottom variant="h7" component="div">
                <div className='flex-parent-element'>
                    <div style={{ paddingTop: '10px' }}>
                        <p>{props.title}</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <p style={{ paddingTop: '10px' }}>Detail View</p>
                        <IconButton >
                            {props.title === 'Saving Categories' ? <Link to="/SavingCtgMore"><ChevronRightIcon /></Link> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                </div>


                <hr></hr>
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
                <div className='flex-parent-element' >
                    <div>
                        <Piechart />
                    </div>
                    <div className='first' >

                        <ul>
                            <li>Cluster_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$1.9M (12.98%)</li>
                            <li>Cluster_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$1.9M (12.98%)</li>
                            <li>Cluster_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$1.9M (12.98%)</li>
                            <li>Cluster_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$1.9M (12.98%)</li>
                            <li>Cluster_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$1.9M (12.98%)</li>
                        </ul>




                    </div>

                </div>

            </Typography>




        </Card >
    );
}