import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { width } from '@mui/system';

export default function Datacard(props) {
    console.log(props);
    return (
        <Card sx={{ height: 420 }}>
            <CardActionArea>
                <div>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" paddingTop={"25px"}>
                            <Typography style={{ color: "grey" }}> Total Previous Month Cost </Typography>
                            {props.prevMonth}
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '500px' }}>
                            <Typography gutterBottom variant="h6" component="div" paddingTop={"15px"}>
                                <Typography style={{ color: "grey" }}> Possible Monthly Saving </Typography>
                                <b>{props.MonthSaving}</b>{props.percentage}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" paddingTop={"15px"}>
                                <Typography style={{ color: "grey" }}>Possible Annual Saving </Typography>
                                <b>{props.AnnualSaving}</b>{props.percentage}
                            </Typography>
                        </div>


                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{ height: 150, width: 1000 }}

                        style={{}}
                        image={props.img}
                        alt="GKE"


                    />
                </div>

            </CardActionArea>
        </Card>
    );
}