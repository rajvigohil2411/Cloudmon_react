import * as React from 'react';
import ActionAreaCard from '../Components/Card.js'
import MultipleSelectCheckmarks from '../Components/Dropdown.js'
import BarchartCard from '../Components/BarchartCard.js'
import LinechartCard from '../Components/LinechartCard.js'
import Grid from '@mui/material/Grid'
import DoughnutchartCard from '../Components/DoughnutchartCard.js'
import gkeImage from "../assets/cards/gke.png";
import gcpImage from "../assets/cards/gcp.jpeg"
import BasicSelect from '../Components/Dropdown_cluster.js';

const line1data = {
    'labels': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Request',
        data: [10, 30, 10, 20, 50, 10, 30, 30, 40, 20, 40, 10],
        borderColor: '#306dbe',
        borderWidth: 2,
        pointBorderColor: '#306dbe',
        fill: false

    }]
}
const line2data = {
    'labels': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Request',
        data: [10, 30, 10, 20, 50, 10, 30, 30, 40, 20, 40, 10],
        borderColor: '#306dbe',
        borderWidth: 2,
        pointBorderColor: '#306dbe',
        fill: false,


    },
    {
        label: 'Consumption',
        data: [20, 30, 20, 30, 20, 10, 40, 30, 50, 10, 50, 10],
        borderColor: '#b3eddc',
        borderWidth: 2,
        pointBorderColor: '#b3eddc',
        fill: false

    }
    ]
}

const data_Barchart1 = {
    'labels': ['Name Here', 'Name Here', 'Name Here', 'Name Here', 'Name Here'],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
            'rgba(48,109,190)',
            'rgba(48,109,190)',
            'rgba(48,109,190)',
            'rgba(48,109,190)',
            'rgba(48,109,190)'

        ],
        borderColor: [
            'rgba(48,109,190)',
            'rgba(48,109,190)',
            'rgba(48,109,190)',
            'rgba(48,109,190)',
            'rgba(48,109,190)'

        ],
        borderWidth: 1,
        barThickness: 4,
        barPercentage: 0.9,
        pointStyle: 'circle'

    }]
};
const data1 = {
    labels: ['CN1', 'CN2', 'CN3', 'CN4', 'CN5'],
    datasets: [{
        label: 'Cost by Namespace',
        data: [10, 20, 30, 40, 50, 23],
        backgroundColor: ['#7be0c3', '#255797', '#306dbe', '#438fbe', '#64bdd7'],
        borderColor: ['#7be0c3', '#255797', '#306dbe', '#438fbe', '#64bdd7'],

    }]
}
const data_Barchart2 = {
    'labels': ['Jharkhand', 'Odisha', 'Gujarat', 'Maharashtra', 'Tamilnadu'],
    datasets: [{
        label: 'My First Dataset',
        data: [60, 50, 20, 8, 36],
        backgroundColor: [
            'rgba(48,109,190)',
            'rgba(48,109,190)',
            'rgba(48,109,190)',
            'rgba(48,109,190)',
            'rgba(48,109,190)'

        ],
        borderColor: [
            'rgba(48,109,190)',
            'rgba(48,109,190)',
            'rgba(48,109,190)',
            'rgba(48,109,190)',
            'rgba(48,109,190)'

        ],
        borderWidth: 1,
        barThickness: 4,
        barPercentage: 0.9,
        pointStyle: 'circle'

    }]
};






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


            <Grid container spacing={2} paddingLeft={"80px"} paddingRight={"12px"} paddingBottom={"10px"} >
                <Grid item xs={12} display="flex" justifyContent="flex-start" >
                    <b style={{ color: "white", fontSize: "30px", textAlign: "left", paddingLeft: "0px", paddingTop: "0px", marginTop: "30px" }}>GKE Cost Dashboard</b>



                </Grid>





                <Grid item xs={4} paddingLeft={"10px"} >
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
                    <DoughnutchartCard title='Cluster Current Cost'
                        component_name='Cluster Current Cost'
                        data={data1} />
                </Grid>
                <Grid item xs={6}>
                    <BarchartCard
                        title='Cost by Namespace'
                        detail_view='Display cluster Name'
                        data={data_Barchart1}
                        component_name='Namespace'
                    />
                </Grid>


                <Grid item xs={12}>
                    <LinechartCard
                        data={line1data}
                        title='Total GKE Cost'
                        component_name='GKE Cost' />
                </Grid>
                <Grid item xs={12}>
                    <LinechartCard
                        data={line2data}
                        title='Request vs Consumption'
                        component_name='Request vs Consumption' />
                </Grid>
                <Grid item xs={6}>
                    <BarchartCard title='Cost by Region'
                        detail_view=''
                        data={data_Barchart2}
                        component_name='Region' />

                </Grid>
                <Grid item xs={6}>
                    <DoughnutchartCard title='Top 5 Highest Cost by Label'
                        component_name='Cost by Label'
                        data={data1} />
                </Grid>

            </Grid>








        </div>
    );
}

