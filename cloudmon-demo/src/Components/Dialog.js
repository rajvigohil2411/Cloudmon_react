import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AddDynamicInput from './AddDynamicInput.js'
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>

            <IconButton onClick={handleClickOpen}>
                <AddIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}  >
                <DialogTitle style={{ width: '1000px' }}>{'Add ' + props.title}</DialogTitle>
                <DialogContent>


                    <AddDynamicInput
                        label={props.placeholder}
                        title_name={props.title}
                        dataArray={props.dataArray}
                        dataState={props.dataState}

                    />

                </DialogContent>




            </Dialog>
        </div>
    );
}