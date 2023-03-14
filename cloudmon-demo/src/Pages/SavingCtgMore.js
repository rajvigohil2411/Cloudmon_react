import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Datacard from '../Components/Datacard.js';
import DoughnutchartCard from '../Components/DoughnutchartCard.js'
import Dropdown from '../Components/Dropdown.js'
import chart from "/Users/rajvibagohil2411/Desktop/Cloudmon-React/cloudmon-demo/src/assets/cards/chart.png";
import BasicTable from '../Components/Table.js';
import ToggleButtons from '../Components/Toggle.js'

export default function SavingCtgMore() {
    return <div>
        <Grid container spacing={2} paddingLeft={"80px"} >
            <Grid item xs={12} display="flex" justifyContent="flex-start" >
                <Typography style={{ color: "white", fontSize: "30px", textAlign: "left", paddingLeft: "50px", paddingTop: "0px", marginTop: "0px" }}>Saving Categories Detail View</Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="flex-start" marginTop='50px'>
                <ToggleButtons style={{ paddingTop: '100px' }} />
            </Grid>

            <Grid item xs={12}>
                <BasicTable title={'Total Cost $3,419,025.48'} />
            </Grid>




        </Grid>








    </div>
}