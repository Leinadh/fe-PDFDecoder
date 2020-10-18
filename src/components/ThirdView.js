import React, { Component } from 'react';
import '../assets/css/ThirdView.css';
import Grid from '@material-ui/core/Grid';
import Variables from './Variables';
import Paper from '@material-ui/core/Paper';
import ShowPDF from './ShowPDF';

function ThirdView(props) {
  const { changeView, docsResult, docSelected, setDocsResult } = props;
  console.log(docsResult, docSelected);
  const docInfo = docsResult[docSelected];
  console.log('docSelectedInfo:: ', docInfo);

  const updateDocInfo = (newDocInfo) => {
    const newDocsResult = [...docsResult];
    newDocsResult[docSelected] = newDocInfo;
    // console.log('NEW DOC INFO:: ', newDocInfo);
    // console.log('NEW:: ', newDocsResult);
    setDocsResult(newDocsResult);
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <div class="container-table">
          <Paper elevation={3}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <h3>{docInfo['file_name']}</h3>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <h5>Fecha: {docInfo['FECHA']}</h5>
              <h5>Unidades de medida: Soles</h5>
            </Grid>
          </Paper>
          <br></br>
          <Variables
            docInfo={docInfo}
            updateDocInfo={updateDocInfo}
            changeView={changeView}
          />
        </div>
        <div>
          <ShowPDF />
        </div>
      </Grid>
    </div>
  );
}

export default ThirdView;
