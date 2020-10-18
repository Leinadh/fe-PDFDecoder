import React, { useEffect, useState } from 'react';
import SecondView from './SecondView';
import ThirdView from './ThirdView';
import ShowPDF from './ShowPDF';
import App from '../App';

export default function Controller() {
  // Declaración de una variable de estado que llamaremos "count"
  const [comp, setComp] = useState('upload');
  const [docsResult, setDocsResult] = useState([]);
  const [docSelected, setDocSelected] = useState(null);

  useEffect(() => {
    // render comp
  });

  // console.log('comp', comp);
  return (
    <div>
      {comp === 'upload' && (
        <App changeView={setComp} setDocsResult={setDocsResult} />
      )}
      {comp === 'result' && (
        <SecondView
          changeView={setComp}
          docsResult={docsResult}
          setDocSelected={setDocSelected}
        />
      )}
      {comp === 'detail' && (
        <ThirdView
          changeView={setComp}
          docsResult={docsResult}
          docSelected={docSelected}
        />
      )}
    </div>
  );
}
