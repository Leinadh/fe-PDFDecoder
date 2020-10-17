import React, { useState } from 'react';
import SecondView from './SecondView';
import ThirdView from './ThirdView';
import ShowPDF from './ShowPDF';
import App from '../App';

export default function Controller() {
  // Declaración de una variable de estado que llamaremos "count"
  const [comp, setComp] = useState('upload');

  console.log('comp', comp);
  return (
    <div>
      {comp === 'upload' && <App changeView={setComp} />}
      {comp === 'result' && <SecondView changeView={setComp} />}
      {comp === 'detail' && <ThirdView changeView={setComp} />}
    </div>
  );
}
