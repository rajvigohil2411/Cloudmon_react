import * as React from 'react';

import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Datacard from '../Components/Datacard.js';
import DoughnutchartCard from '../Components/DoughnutchartCard.js'
import MultipleSelectCheckmarks from '../Components/Dropdown.js'
import chart from "../assets/cards/chart.png";
import BasicTable from '../Components/Table.js';


export default function Settings() {
    const [projectName, setProjectName] = React.useState(['Toyota',
        'AMC123',
        'Indigo',
        'Rayn234',
        'Restro123',
        'adc345',
        'fvbhdf4',
        'fdvbdfvh223']);
    return (
        <div className="Analytics">

            <Grid container spacing={2} paddingLeft={"80px"} paddingRight={"12px"} paddingBottom={"10px"}>
                <Grid item xs={12} display="flex" justifyContent="flex-start" >

                    <Typography style={{ color: "white", fontSize: "30px", textAlign: "left", paddingLeft: "0px", paddingTop: "0px", marginTop: "30px" }}>Cost Recommendations</Typography>
                </Grid>
                <Grid item xs={4}>
                    <MultipleSelectCheckmarks
                        name="Project ID"
                        placeholder='ex. searce_Playground'
                        dataArray={projectName}
                        dataState={setProjectName}

                    />
                </Grid>

                <Grid item xs={8}></Grid>
                <Grid item xs={6}>
                    <Datacard
                        img={chart}
                        prevMonth="$3,419,025.00"
                        MonthSaving="$2,3 M "
                        AnnualSaving="$12,3 M "
                        percentage="(19.21%)"
                    />
                </Grid>
                <Grid item xs={6}>
                    <DoughnutchartCard title='Saving Categories' />
                </Grid>
                <Grid item xs={12}>
                    <BasicTable title={'Top 10 recommendations'} />
                </Grid>




            </Grid>








        </div >
    )
}