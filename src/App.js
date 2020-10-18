import React from 'react';
import './assets/css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import Grid from '@material-ui/core/Grid';
// import { mock_response_completo, mock_response } from './components/mock';

const MyUploader = (props) => {
  // specify upload params and url for your files
  const getUploadParams = ({ file, meta }) => {
    // online
    const body = new FormData();
    body.append('files[]', file);
    const url =
      'http://ec2-107-20-114-191.compute-1.amazonaws.com:80/process-documents';
    // const url = 'http://localhost:80/process-documents';
    return {
      url,
      body,
    };

    // offline
    // return { url: 'https://httpbin.org/post' };
  };

  const { changeView, setDocsResult } = props;

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    // console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles, props) => {
    // console.log(
    //   'submition',
    //   files.map((f) => JSON.parse(f.xhr.response))
    // );

    // online
    const apiResponse = files.map((f) => JSON.parse(f.xhr.response));
    // offline
    // const apiResponse = [{}, {}];
    // setDocsResult(apiResponse);

    // const completeResponse = (response) => {
    //   //mock_response_completo;
    // };

    setDocsResult(
      apiResponse.map((e) => {
        const file_name = e.responses_docs[0].file_name;
        const response = e.responses_docs[0];
        const mock = { ...response, file_name };

        return mock;
      })

      // offline
      // apiResponse.map((e) => {
      //   const mock = { ...mock_response_completo, file_name: 'gaa.png' };

      //   return mock;
      // })
    );
    changeView('result');

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

function App(props) {
  const { changeView, setDocsResult } = props;
  return (
    <div>
      <div class="container">
        <Grid container direction="column" justify="center" alignItems="center">
          <h1>Cargue los archivos</h1>
          <br></br>
          <br></br>
          <MyUploader changeView={changeView} setDocsResult={setDocsResult} />
        </Grid>
      </div>
    </div>
  );
}

export default App;
