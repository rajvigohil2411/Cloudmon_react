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
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';


export default function MultipleSelectCheckmarks(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setPersonName([]);
        setCounter([]);
    };

    const [personName, setPersonName] = React.useState([]);
    const [counter, setCounter] = React.useState(0);

    const handleChange = (event) => {
        console.log("Hellloooo", event.target.value);
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        if (event.target.value[0] === undefined && event.target.value.length)
            setCounter((event.target.value.length) - 1);
        else setCounter(event.target.value.length);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 400 }}>
                <InputLabel id="demo-multiple-checkbox-label" sx={{ color: "white" }}>{props.name}</InputLabel>

                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    open={open}
                    onOpen={handleClickOpen}
                    size={2}
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={
                        (selected) => (
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                {selected.length > 2 ? (
                                    <div>
                                        <Chip key={selected[0]} label={selected[0]} style={{ color: 'white' }} />
                                        <Chip key={selected[1]} label={selected[1]} style={{ color: 'white' }} />
                                        <Chip key={"+" + (selected.length - 2)} label={'+' + (selected.length - 2)} style={{ color: 'white' }} />

                                    </div>
                                ) : (
                                    <div>
                                        {selected.map((value) => (

                                            <Chip key={value} label={value} style={{ color: 'white' }} />
                                        ))}
                                    </div>
                                )}
                            </Box>
                        )
                    } MenuProps={{
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
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2px' }}>
                            <div>
                                <Typography style={{ padding: '15px', color: 'GrayText' }} > {counter} selected</Typography>

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>

                                <IconButton style={{ color: 'black' }} onClick={handleClose}  >
                                    <Typography style={{ padding: '2px' }} ><b> Cancel</b></Typography>


                                </IconButton>
                                <IconButton style={{ color: 'black' }}
                                >
                                    <Typography style={{ padding: '2px' }}><b>Apply</b></Typography>
                                </IconButton>
                            </div>
                        </div>

                    </div>


                </Select>


            </FormControl>
        </div>
    );
}


