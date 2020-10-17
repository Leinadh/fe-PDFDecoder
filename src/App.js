import React from 'react';
import './assets/css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import Grid from '@material-ui/core/Grid';

const MyUploader = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ file, meta }) => {
    const body = new FormData();
    body.append('files[]', file);
    const url =
      'http://ec2-107-20-114-191.compute-1.amazonaws.com:80/process-documents';
    //const url = 'http://localhost:80/process-documents';
    return {
      url,
      body,
    };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    // console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles, props) => {
    console.log(
      'submition',
      files.map((f) => JSON.parse(f.xhr.response))
    );

    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      className="dropzone"
      inputContent="Arrastre archivos o haga clic para examinar"
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept=".pdf,image/*"
    />
  );
};

function App() {
  return (
    <div>
      <div class="container">
        <Grid container direction="column" justify="center" alignItems="center">
          <h1>Cargue los archivos</h1>
          <br></br>
          <br></br>
          <MyUploader />
        </Grid>
      </div>
    </div>
  );
}

export default App;
