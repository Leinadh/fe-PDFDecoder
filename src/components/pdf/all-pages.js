import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const axios = require('axios');

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);
  // const [thisPdf, setThisPdf] = useState(null);

  const { pdf, docInfo, thisPdf } = props;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  console.log('pdf:: ', thisPdf);
  return thisPdf ? (
    <Document
      file={thisPdf ? thisPdf : pdf}
      options={{ workerSrc: '/pdf.worker.js' }}
      onLoadSuccess={onDocumentLoadSuccess}
      // styles={{ width: 500, height: 800 }}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page size={'A4'} key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  ) : (
    <div></div>
  );
}
