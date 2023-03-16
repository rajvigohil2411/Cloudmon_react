import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchBar from './SearchBar.js'
import FormDialog from './Dialog.js';




export default function MultipleSelectCheckmarks(props) {

    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 400 }}>
                <InputLabel id="demo-multiple-checkbox-label" sx={{ color: "white" }}>{props.name}</InputLabel>

                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => { console.log(selected); return selected.join(", ") }}
                    MenuProps={{
                        style: {
                            maxHeight: 400
                        },
                    }}

                >

                    <div style={{ position: 'sticky', top: '0', zIndex: 999, backgroundColor: 'white', height: '100px' }} >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                            <Typography style={{ padding: '10px' }}><b>{props.name}</b></Typography>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormDialog
                                    title={props.name}
                                    placeholder={props.placeholder}
                                    dataArray={props.dataArray}
                                    dataState={props.dataState}

                                />
                                <Typography style={{ padding: '10px' }}><b>Add</b></Typography>
                            </div>


                        </div>
                        <SearchBar />
                    </div>

                    {props.dataArray.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}


                    <div style={{ position: 'sticky', bottom: '0', backgroundColor: 'white' }}>
                        <hr></hr>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>

                            <IconButton >
                                <Typography style={{ padding: '2px' }} ><b> Cancel</b></Typography>


                            </IconButton>
                            <IconButton style={{ backgroundColor: '#569fe4', borderRadius: '5px', width: '100px' }}
                            >
                                <Typography style={{ padding: '2px' }}><b>Apply</b></Typography>
                            </IconButton>
                        </div>
                    </div>


                </Select>


            </FormControl>
        </div>
    );
}


