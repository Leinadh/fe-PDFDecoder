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
        <Grid container
              direction="row" 
              justify="space-around"
              alignItems="center"
        >
            <Button variant="contained" color="primary" component="span"
                onClick={() => {
                  changeView('upload');
                }}
            >
              REGRESAR
            </Button>
            <Button variant="contained" color="primary" component="span">
              DESCARGAR TODOS
            </Button>
        </Grid>
      </div>
    </div>
  );
}

export default SecondView;
