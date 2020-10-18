import React, { useState } from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

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
  return { variableName, value };
}

// const rowsBG = [
// createData('Caja y efectivo', 159),
// createData('Total Activo', 237),
// createData('Total Pasivo', 262),
// createData('Total Patrimonio', 305),
// ];

// const rowsEGP = [
// createData('Ventas', 159),
// createData('Costos de Ventas', 237),
// createData('Utilidad Bruta', 262),
// createData('Utilidad Operacional', 305),
// createData('Utilidad antes de impuestos', 356),
// createData('Utilidad Neta', 356),
// ];

export default function BasicTable(props) {
  const classes = useStyles();
  const { docInfo, updateDocInfo, changeView } = props;
  // const docInfo = { ...docInfo };
  const iniRowsBG = [
    { variableName: 'CAJA Y BANCOS', value: docInfo['CAJA Y BANCOS'] },
    { variableName: 'TOTAL ACTIVO', value: docInfo['TOTAL ACTIVO'] },
    { variableName: 'TOTAL PASIVO', value: docInfo['TOTAL PASIVO'] },
    {
      variableName: 'TOTAL PATRIMONIO',
      value: docInfo['TOTAL PATRIMONIO'],
    },
  ];
  const iniRowsEGP = [
    { variableName: 'VENTAS', value: docInfo['VENTAS'] },
    { variableName: 'COSTO DE VENTAS', value: docInfo['COSTO DE VENTAS'] },
    { variableName: 'UTILIDAD BRUTA', value: docInfo['UTILIDAD BRUTA'] },
    {
      variableName: 'UTILIDAD OPERACIONAL',
      value: docInfo['UTILIDAD OPERACIONAL'],
    },
    {
      variableName: 'UTILIDAD ANTES DE IMPUESTOS',
      value: docInfo['UTILIDAD ANTES DE IMPUESTOS'],
    },
    { variableName: 'UTILIDAD NETA', value: docInfo['UTILIDAD NETA'] },
  ];

  const [rowsBG, setRowsBG] = useState(iniRowsBG);
  const [rowsEGP, setRowsEGP] = useState(iniRowsEGP);

  const changeDataValue = (e, row, setter, orig) => {
    console.log('change::', e.target.value);
    const changed = [...orig];
    const newValue = e.target.value;
    changed.forEach((e) => {
      if (e.variableName == row.variableName) {
        e.value = newValue;
      }
    });
    setter(changed);
  };

  const saveNewDocInfo = () => {
    let newDocInfo = {};
    rowsBG.forEach((e) => {
      newDocInfo[e.variableName] = e.value;
    });
    rowsEGP.forEach((e) => {
      newDocInfo[e.variableName] = e.value;
    });
    newDocInfo = { ...docInfo, ...newDocInfo };
    // console.log('Before:: ', docInfo);
    // console.log('After:: ', newDocInfo);
    updateDocInfo(newDocInfo);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Balance General</StyledTableCell>
              <StyledTableCell>Valores</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsBG &&
              rowsBG.map((row) => (
                <TableRow key={row.variableName}>
                  <TableCell component="th" scope="row">
                    {row.variableName}
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="standard-basic"
                      value={row.value}
                      onChange={(e) =>
                        changeDataValue(e, row, setRowsBG, rowsBG)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableHead>
            <TableRow>
              <StyledTableCell>Estado de ganancias y pérdidas</StyledTableCell>
              <StyledTableCell>Valores</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsEGP &&
              rowsEGP.map((row) => (
                <TableRow key={row.variableName}>
                  <TableCell component="th" scope="row">
                    {row.variableName}
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="standard-basic"
                      value={row.value}
                      onChange={(e) => {
                        changeDataValue(e, row, setRowsEGP, rowsEGP);
                        // saveNewDocInfo(); //
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => {
          saveNewDocInfo();
        }}
      >
        Guardar
      </Button>
      <Button
        onClick={() => {
          changeView('result');
        }}
      >
        Regresar
      </Button>
    </div>
  );
}
