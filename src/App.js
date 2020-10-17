import React from 'react';
import './assets/css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

import SecondView from './components/SecondView'

const MyUploader = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles, props) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      inputContent="Arrastre archivos o haga clic para examinar"
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept=".pdf,image/*"
    />
  )
}

function App() {
  return (
    <div className="App">
      
      <MyUploader />

    </div>
  );
}

export default App;