import React, { useEffect, useState } from 'react';

// import SinglePagePDFViewer from "./pdf/single-page";
import AllPagesPDFViewer from './pdf/all-pages';
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from './aaaa.pdf';
import '../assets/css/ShowPDF.css';
const axios = require('axios');

export default function ShowPDF(props) {
  const { origPdf, docInfo, thisPdf } = props;

  console.log('OPDF:: ', origPdf);
  return (
    <div className="Document">
      <h4>Documento PDF</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer
          pdf={samplePDF}
          docInfo={docInfo}
          thisPdf={thisPdf}
        />
      </div>

      <hr />
    </div>
  );
}
