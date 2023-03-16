import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DoneIcon from '@mui/icons-material/Done';

function AddDynamicInput(props) {
    console.log(props);

    const [val, setVal] = useState(['']);

    const handleAdd = () => {
        const abc = [...val, '']
        setVal(abc)
    }
    const addData = () => {
        const initialArray = [...props.dataArray];
        initialArray.push(...val);
        props.dataState(initialArray);
        setVal(['']);

    }
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }
    const handleDelete = (i) => {
        const deletVal = [...val]
        deletVal.splice(i, 1)
        setVal(deletVal)
    }
    console.log(val, "data-")
    return (

        <div  >
            {val.map((data, i) => {
                return (
                    <div style={{ width: '550px', display: 'flex' }}>
                        <TextField variant="outlined"


                            autoFocus
                            margin="dense"
                            id={i}
                            placeholder={props.label}
                            fullWidth
                            value={data} onChange={e => handleChange(e, i)} />
                        <IconButton onClick={() => handleDelete(i)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                )
            })}
            <div style={{ display: 'flex', marginBottom: '30px', marginTop: '5px' }}>
                <IconButton onClick={() => handleAdd()}>

                    <AddIcon />
                </IconButton>
                <Typography style={{ padding: '10px' }}><b>Add more</b></Typography>

            </div>
            <hr></hr>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label={'Display ' + props.title_name + ' after added'} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton >
                        <Typography style={{ padding: '2px' }} ><b> Cancel</b></Typography>


                    </IconButton>
                    <IconButton style={{ backgroundColor: '#569fe4', borderRadius: '5px', width: '100px' }}
                        onClick={addData}>
                        <Typography style={{ padding: '2px' }}><b>Add</b></Typography><DoneIcon />
                    </IconButton>
                </div>

            </div>
        </div>
    );
}
export default AddDynamicInput;