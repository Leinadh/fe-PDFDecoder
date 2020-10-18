import React, { Component } from 'react';
import '../assets/css/SecondView.css';

import CardCompany from './CardCompany';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CsvDownload from 'react-json-to-csv';

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
              <CsvDownload  style={{ //pass other props, like styles
                borderRadius:"4px",
                display: "flex",
                width: "auto",
                fontSize:"0.875rem",
                padding:"6px 16px",
                lineHeight: "1.75",
                boxShadow:"none",
                }}
                data={docsResult}>
                DESCARGAR TODOS
              </CsvDownload>
        </Grid>
      </div>
    </div>
  );
}

export default SecondView;
