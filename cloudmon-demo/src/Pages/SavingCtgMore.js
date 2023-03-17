import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Datacard from '../Components/Datacard.js';
import DoughnutchartCard from '../Components/DoughnutchartCard.js'
import Dropdown from '../Components/Dropdown.js'
import BasicTable from '../Components/Table.js';
import ToggleButtons from '../Components/Toggle.js'
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function SavingCtgMore() {
    return <div>
        <Grid container spacing={2} paddingLeft={"80px"} paddingRight={"12px"} paddingBottom={"10px"} >

            <Grid item xs={12} display="flex" justifyContent="flex-start" >
                <div >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ paddingLeft: "0px", paddingTop: "0px", marginTop: "40px", borderRadius: '5px' }}

                    >
                        <Link href='/settings' underline="hover"><ArrowBackIcon style={{ color: 'white' }} /></Link>
                    </IconButton>
                </div>
                <Typography style={{ color: "white", fontSize: "30px", textAlign: "left", paddingLeft: "0px", paddingTop: "0px", marginTop: "30px" }}>Saving Categories Detail View</Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="flex-start" marginTop='0px'>
                <ToggleButtons style={{ paddingTop: '100px' }} />
            </Grid>

            <Grid item xs={12}>
                <BasicTable title={'Total Cost $3,419,025.48'} />
            </Grid>




        </Grid>








    </div>
}