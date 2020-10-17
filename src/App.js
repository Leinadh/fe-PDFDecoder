import React from 'react';
import './assets/css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import Grid from '@material-ui/core/Grid';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import IconButton from '@material-ui/core/IconButton';
import SecondView from './components/SecondView';


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
      className="dropzone"
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
    <div>
      <Grid container direction="row" justify="flex-start" alignItems="center" style={{ marginLeft:40}}>
          <IconButton aria-label="PDF">
              <PictureAsPdfIcon style={{ fontSize: 90 }}/>
          </IconButton>
          <h1>Decoder</h1>
      </Grid>
    <div class='container' >
            <Grid container direction="column" justify="center" alignItems="center">
              <h1>Cargue los archivos</h1>
              <br></br>
              <br></br>
              <MyUploader/>
            </Grid>
    </div>
    </div>
  );
}

export default App;
