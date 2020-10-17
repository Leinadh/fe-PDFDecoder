import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const useStyles = makeStyles({
    table: {
      minWidth: 400,
    },
  });
  
  function createData(variableName, value) {
    return { variableName, value};
  }
  
  const rowsBG = [
    createData('Caja y efectivo', 159),
    createData('Total Activo', 237),
    createData('Total Pasivo', 262),
    createData('Total Patrimonio', 305),
  ];

  const rowsEGP = [
    createData('Ventas', 159),
    createData('Costos de Ventas', 237),
    createData('Utilidad Bruta', 262),
    createData('Utilidad Operacional', 305),
    createData('Utilidad antes de impuestos', 356),
    createData('Utilidad Neta', 356),
  ];
  
  export default function BasicTable() {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Balance General</StyledTableCell>
              <StyledTableCell>Calories</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsBG.map((row) => (
              <TableRow key={row.variableName}>
                <TableCell component="th" scope="row">
                  {row.variableName}
                </TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableHead>
            <TableRow>
              <StyledTableCell>Estado de ganancias y pérdidas</StyledTableCell>
              <StyledTableCell>Calories</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsEGP.map((row) => (
              <TableRow key={row.variableName}>
                <TableCell component="th" scope="row">
                  {row.variableName}
                </TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }