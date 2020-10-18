import React, { useEffect, useState } from 'react';
import '../assets/css/ThirdView.css';
import Grid from '@material-ui/core/Grid';
import Variables from './Variables';
import Paper from '@material-ui/core/Paper';
import ShowPDF from './ShowPDF';
const axios = require('axios');

function ThirdView(props) {
  const { changeView, docsResult, docSelected, setDocsResult, pdfs } = props;
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

  const [thisPdf, setThisPdf] = useState(null);
  //   let thisPdf = null;
  useEffect(() => {
    if (thisPdf === null) {
      axios({
        url:
          'http://ec2-107-20-114-191.compute-1.amazonaws.com:80/get-document-with-boxes?doc_name=' +
          docInfo['DOCUMENTO CON CAJAS'], // download url
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          mode: 'no-cors',
        },
        responseType: 'blob',
      })
        .then((response) => response.data)
        .then((blob) => {
          var url = window.URL.createObjectURL(blob);
          setThisPdf(url);
          console.log('thisPdf:: ', thisPdf);
          // var a = document.createElement('a');
          // a.href = url;
          // a.download = fileName;
          // a.click();
          // a.remove();
          // setTimeout(() => window.URL.revokeObjectURL(url), 100);
        });
    }
  });

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
              <h3>Fecha: {docInfo['FECHA']}</h3>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              {/* <h5>Fecha: {docInfo['FECHA']}</h5> */}
              {/* <h5>Unidades de medida: {docInfo['UNIDADES DE MEDIDA']}</h5> */}
            </Grid>
          </Paper>
          <br></br>
          <Variables
            docInfo={docInfo}
            updateDocInfo={updateDocInfo}
            changeView={changeView}
          />
          <br></br>
        </div>
        <div>
          <ShowPDF
            origPdf={pdfs[docSelected]}
            docInfo={docInfo}
            thisPdf={thisPdf}
          />
        </div>
      </Grid>
    </div>
  );
}

export default ThirdView;
