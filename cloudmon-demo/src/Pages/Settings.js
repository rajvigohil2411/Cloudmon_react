import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Datacard from '../Components/Datacard.js';
import DoughnutchartCard from '../Components/DoughnutchartCard.js'
import Dropdown from '../Components/Dropdown.js'
import chart from "/Users/rajvibagohil2411/Desktop/Cloudmon-React/cloudmon-demo/src/assets/cards/chart.png";
import BasicTable from '../Components/Table.js';


export default function Settings() {
    return (
        <div className="Analytics">

            <Grid container spacing={2} paddingLeft={"80px"} >
                <Grid item xs={12} display="flex" justifyContent="flex-start" >
                    <Typography style={{ color: "white", fontSize: "30px", textAlign: "left", paddingLeft: "50px", paddingTop: "0px", marginTop: "0px" }}>Cost Recommendations</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Dropdown
                        name="Project Id"
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