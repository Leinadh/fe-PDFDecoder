import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import * as serviceWorker from './serviceWorker';
import Controller from './components/Controller';
import SecondView from './components/SecondView';
import ThirdView from './components/ThirdView';
import ShowPDF from './components/ShowPDF';

ReactDOM.render(
  <React.StrictMode>
    {/* <ShowPDF/> */}
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      style={{ marginLeft: 40 }}
    >
      <IconButton aria-label="PDF">
        <PictureAsPdfIcon style={{ fontSize: 90 }} />
      </IconButton>
      <h1>Decoder</h1>
    </Grid>
    <Controller/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
