import React from "react";

import SinglePagePDFViewer from "./pdf/single-page";
import AllPagesPDFViewer from "./pdf/all-pages";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./aaaa.pdf";

import "../assets/css/ShowPDF.css";


export default function ShowPDF() {
  return (
    <div className="Document">
      <h4>Documento PDF</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF} />
      </div>

      <hr />


    </div>
  );
}
