import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SearchBar from './SearchBar';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import FormDialog from './Dialog.js';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags(props) {
    return (
        <Autocomplete
            multiple
            limitTags={2}
            id="checkboxes-tags-demo"
            options={top100Films}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.title}
                </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
                <div>
                    <TextField sx={{ color: "white" }} {...params} label={props.name} />
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

                </div>

            )}
        />

    );
}
const top100Films = [
    { title: 'ProjectId123' },
    { title: 'ProjectId123' },
    { title: 'Rayn234' },
    { title: 'Restro123' },
    { title: 'ProjectId123' },
    { title: 'fvbhdf4' },
    { title: 'abc_123' }


];