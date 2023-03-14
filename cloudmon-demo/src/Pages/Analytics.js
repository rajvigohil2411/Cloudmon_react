import * as React from 'react';
import ActionAreaCard from '../Components/Card.js'
import MultipleSelectCheckmarks from '../Components/Dropdown.js'
import BarchartCard from '../Components/BarchartCard.js'
import LinechartCard from '../Components/LinechartCard.js'
import Grid from '@mui/material/Grid'
import DoughnutchartCard from '../Components/DoughnutchartCard.js'
import gkeImage from "/Users/rajvibagohil2411/Desktop/Cloudmon-React/cloudmon-demo/src/assets/cards/gke.png";
import gcpImage from "/Users/rajvibagohil2411/Desktop/Cloudmon-React/cloudmon-demo/src/assets/cards/gcp.jpeg"

const data = {
    'labels': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Request',
        data: [10, 30, 30, 140, 5, 10, 30, 30, 140, 5, 45, 98],
        borderColor: '#306dbe',
        borderWidth: 2,
        pointBorderColor: 'aqua',
        fill: false

    },
    {
        label: 'Consumption',
        data: [100, 3, 20, 14, 57, 110, 40, 130, 10, 65, 85, 18],

        borderColor: '#b3eddc',
        borderWidth: 2,
        pointBorderColor: 'red',
        fill: false

    }
    ]
}






export default function Analytics() {
    const [projectName, setProjectName] = React.useState(['Toyota',
        'AMC123',
        'Indigo',
        'Rayn234',
        'Restro123',
        'adc345',
        'fvbhdf4',
        'fdvbdfvh223']);
    const [tableName, setTableName] = React.useState(['Toyota123',
        'AMC12345',
        'Indigo',
        'Rayn234',
        'Restr45o123',
        'adc345',
        'fvbhd56f4',
        'fdvbdfgfvh223']);

    return (
        <div className="Analytics">

            <Grid container spacing={2} paddingLeft={"80px"} >
                <Grid item xs={12} display="flex" justifyContent="flex-start" >
                    <b style={{ color: "white", fontSize: "30px", textAlign: "left", paddingLeft: "50px", paddingTop: "0px", marginTop: "0px" }}>GKE Cost Dashboard</b>



                </Grid>





                <Grid item xs={4}>
                    <MultipleSelectCheckmarks
                        name="Project ID"
                        placeholder='ex. searce_Playground'
                        dataArray={projectName}
                        dataState={setProjectName}

                    />
                </Grid>
                <Grid item xs={4}>
                    <MultipleSelectCheckmarks
                        name="Table ID"
                        placeholder='nice-theater-36881.gke'
                        dataArray={tableName}
                        dataState={setTableName}
                    />

                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>
                    <ActionAreaCard
                        img={gkeImage}
                        title="Total GKE Cost"
                        cost="$3,419,025.00" />
                </Grid>
                <Grid item xs={4}>
                    <ActionAreaCard
                        img={gcpImage}
                        title="Total GCP Cost"
                        cost="$310,025.00" />
                </Grid> <Grid item xs={4}>
                    <ActionAreaCard
                        img={gkeImage}
                        title="Total GKE Egress Cost"
                        cost="$10,025.00" />
                </Grid>


                <Grid item xs={6}>
                    <DoughnutchartCard title='Cluster Current Cost' />
                </Grid>
                <Grid item xs={6}>
                    <BarchartCard title='Cost by Namespace' />
                </Grid>

                <Grid item xs={12}>
                    <LinechartCard
                        {...data} title='Total GKE Cost' />
                </Grid>
                <Grid item xs={12}>
                    <LinechartCard title='Request vs Consumption' />
                </Grid>
                <Grid item xs={6}>
                    <BarchartCard title='Cost by Region' />
                </Grid>
                <Grid item xs={6}>
                    <DoughnutchartCard title='Top 5 Highest Cost by Label' />
                </Grid>

            </Grid>








        </div >
    );
}

