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
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import CsvDownload from 'react-json-to-csv';

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
  const [saved, setSaved] = useState(true);

  const changeDataValue = (e, row, setter, orig) => {
    // console.log('change::', e.target.value);
    const changed = [...orig];
    let newValue = Number(e.target.value);
    if (Number.isNaN(newValue)) {
      console.log('es NaN');
      newValue = e.target.value;
    }
    changed.forEach((e) => {
      if (e.variableName == row.variableName) {
        e.value = newValue;
        setSaved(false);
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
    setSaved(true);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>BALANCE GENERAL</StyledTableCell>
              <StyledTableCell>VALORES</StyledTableCell>
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
              <StyledTableCell>ESTADO DE GANANCIAS Y PÉRDIDAS</StyledTableCell>
              <StyledTableCell>VALORES</StyledTableCell>
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
      <br></br>
      <Grid
        container
        direction="row-reverse"
        justify="space-between"
        alignItems="center"
      >
        <Button variant="contained" color="primary" component="span"
          onClick={() => {
            saveNewDocInfo();
          }}
        >
          Guardar
        </Button>
        {saved ? (
          <CsvDownload style={{ //pass other props, like styles
            borderRadius:"4px",
            display: "flex",
            width: "auto",
            fontSize:"0.875rem",
            padding:"6px 16px",
            lineHeight: "1.75",
            boxShadow:"none",
            }}
            data={[docInfo]} filename={docInfo.file_name + '.csv'}>
            DESCARGAR
          </CsvDownload>
        ) : (
          <Typography color="error">
            Guarde sus cambios para habilitar la descarga
          </Typography>
        )}
        <Button variant="contained" color="primary" component="span"
          onClick={() => {
            changeView('result');
          }}
        >
          Regresar
        </Button>
      </Grid>
      
      
    </div>
  );
}
