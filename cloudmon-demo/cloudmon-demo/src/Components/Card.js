import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard(props) {
    console.log(props);
    return (
        <Card>
            <CardActionArea>
                <div>
                    <CardMedia
                        component="img"
                        sx={{ height: 60, width: 60, margin: 2 }}
                        image={props.img}
                        alt="GKE"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="h6" color="black">
                            <b>{props.cost}</b>
                        </Typography>

                    </CardContent>
                </div>

            </CardActionArea>
        </Card>
    );
}