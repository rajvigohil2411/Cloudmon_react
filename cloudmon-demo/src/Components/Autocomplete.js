import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const data = [
    {
        title: 'CPU'
    },
    {
        title: 'Memory'
    },
    {
        title: 'Egress'
    }
]




export default function FreeSolo(props) {
    const [open, setOpen] = React.useState(false);
    console.log("open", open);

    return (


        <div>
            <Button onClick={() => { setOpen(!open) }}>
                <Typography style={{ textTransform: 'none', color: 'black', fontWeight: 'bold' }}>{props.title}</Typography>
                <ArrowDropDownIcon />

            </Button>
            {
                open && <Autocomplete
                    sx={{ width: "20rem", mt: "0rem", cursor: "pointer" }}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    open={true}
                    options={data.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            //label="search"

                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                                placeholder: 'Search by cluster name',
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    )}
                />
            }

        </div>

    );
}

