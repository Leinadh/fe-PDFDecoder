import React from 'react';
import '../assets/css/SecondView.css';

import CardCompany from './CardCompany';
// import Button from '@material-ui/core/Button';
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
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item xs={2}>
            <CsvDownload data={docsResult}>Descargar todos</CsvDownload>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default SecondView;
