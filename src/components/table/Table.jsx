import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import "./table.css";

function createData(name, club, age, kg, belt, nationality) {
  return { name, club, age, kg, belt, nationality };
}

const rows = [
  createData('Andrei Curea', 'fujiko', 27, 72, 'yellow','Romania'),
  createData('Razvan Dumitrescu', 'fujiko', 25, 82, 'blue','Romania'),
  createData('Radu Sabin', 'fujiko', 22, 80, 'yellow','Romania'),
  createData('Radu Angel', 'fujiko', 20, 75, 'green','Romania'),
  createData('Mir Caru', 'fujiko', 20, 75, 'black','Romania'),
  createData('Mir Andu', 'fujiko', 24, 73, 'black','Romania'),
];


export default function BasicTable() {
  return (
    <>
    <div
    style={{ margin:'20px'}}>
    <h1 className='title'>About Fighters</h1>
  </div>
  
    <div className='table-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  marginTop: '90px' }}>
 
      <TableContainer component={Paper} sx={{padding: '1.5px',  width: '84%', backgroundColor:'blue'}}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1d39c4" }}>
              <TableCell>
                <Typography variant="subtitle1">Names</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1">Dojo</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1">Age</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1">Kilograms</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1">Belt</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1">Nationality</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f8f8',
                  '&:hover': { backgroundColor: '#ebebeb' },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.club}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="center">{row.kg}</TableCell>
                <TableCell align="right">{row.belt}</TableCell>
                <TableCell align="center">{row.nationality}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
  );
}
