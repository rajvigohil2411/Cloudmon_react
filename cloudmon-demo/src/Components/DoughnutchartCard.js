import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import Piechart from './Doughnut'
import { padding } from '@mui/system';
//import gkeImage from "/Users/rajvibagohil2411/Desktop/Cloudmon-React/cloudmon-demo/src/images/cards/gke.png";


export default function DoughnutchartCard(props) {
    console.log(props);
    return (
        <Card sx={{ height: 420, margin: '2px' }}>
            <Typography gutterBottom variant="h7" component="div">
                <div className='flex-parent-element'>
                    <div style={{ paddingTop: '10px' }}>
                        <b>{props.title}</b>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ paddingTop: '10px', fontWeight: 'bold' }}>Detail View</Typography>
                        <IconButton >
                            {props.title === 'Saving Categories' ? <Link to="/settings/SavingCtgMore"><ChevronRightIcon /></Link> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                </div>


                <hr></hr>
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
                {props.component_name === 'Cluster Current Cost' && <div className='flex-parent-element'>
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

                </div>}
                {props.component_name === 'Cost by Label' && <div className='flex-parent-element'>
                    <div >
                        <Piechart />
                    </div>

                    <div className='first'  >

                        <ul>
                            <li>Label name sample cas.. &nbsp;$1.9M (12.98%)</li>
                            <li>Label name sample cascc &nbsp;$1.9M (12.98%)</li>
                            <li>Label name sample cascc &nbsp;$1.9M (12.98%)</li>
                            <li>Label name sample cascc &nbsp;$1.9M (12.98%)</li>
                            <li>Label name sample cascc &nbsp;$1.9M (12.98%)</li>
                        </ul>
                    </div>

                </div>}


            </Typography>




        </Card>
    );
}