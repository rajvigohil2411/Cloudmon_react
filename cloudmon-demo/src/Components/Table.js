import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function createData(Rank, ColumnName1, ColumnName2, ColumnName3, Value) {
    return { Rank, ColumnName1, ColumnName2, ColumnName3, Value };
}

const rows = [
    createData(1, 'Sample Text', 'Sample Text', 'Sample Text', '$2M (12.90%)'),
    createData(2, 'Sample Text', 'Sample Text', 'Sample Text', '$2M (12.90%)'),
    createData(3, 'Sample Text', 'Sample Text', 'Sample Text', '$2M (12.90%)'),
    createData(4, 'Sample Text', 'Sample Text', 'Sample Text', '$2M (12.90%)'),
    createData(5, 'Sample Text', 'Sample Text', 'Sample Text', '$2M (12.90%)'),
    createData(6, 'Sample Text', 'Sample Text', 'Sample Text', '$2M (12.90%)'),
    createData(7, 'Sample Text', 'Sample Text', 'Sample Text', '$2M (12.90%)'),
    createData(8, 'Sample Text', 'Sample Text', 'Sample Text', '$2M (12.90%)'),
    createData(9, 'Sample Text', 'Sample Text', 'Sample Text', '$2M (12.90%)'),
    createData(10, 'Sample Text', 'Sample Text', 'Sample Text', '$2M (12.90%)'),

];

export default function BasicTable(props) {
    return (
        <div sx={{
            height: '100px'
        }}>


            <TableContainer component={Paper}>
                <Typography gutterBottom variant="h7" component="div">
                    <div className='flex-parent-element' >
                        <div style={{ paddingTop: '10px' }}>
                            <b>{props.title}</b>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <p style={{ paddingTop: '10px' }}>Detail View</p>
                            <IconButton >
                                <ChevronRightIcon />
                            </IconButton>
                        </div>
                    </div>


                    <hr></hr>
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#e2e9f0' }}>

                            <TableCell align="right">Rank</TableCell>
                            <TableCell align="right">Column Name</TableCell>
                            <TableCell align="right">Column Name</TableCell>
                            <TableCell align="right">Column Name</TableCell>
                            <TableCell align="right">Value</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow>

                                <TableCell align="right">{row.Rank}</TableCell>
                                <TableCell align="right">{row.ColumnName1}</TableCell>
                                <TableCell align="right">{row.ColumnName2}</TableCell>
                                <TableCell align="right">{row.ColumnName3}</TableCell>
                                <TableCell align="right">{row.Value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}