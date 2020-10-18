import React, { Component } from 'react';
import '../assets/css/SecondView.css';

import CardCompany from './CardCompany';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function SecondView(props) {
  const { docsResult, setDocSelected, changeView } = props;
  // console.log('props', docsResult);
  return (
    <div>
      <div class="container">
        {docsResult.map((docInfo, ind) => (
          <CardCompany
            ind={ind}
            docInfo={docInfo}
            setDocSelected={setDocSelected}
            changeView={changeView}
          />
        ))}
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item xs={2}>
            <Button variant="contained" color="primary">
              Descargar todos
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default SecondView;
