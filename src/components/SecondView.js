import React, {Component} from 'react';
import '../assets/css/SecondView.css';

import CardCompany from './CardCompany';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import IconButton from '@material-ui/core/IconButton';

class SecondView extends Component{
    render(){
        return(
            <div>
                <Grid container direction="row" justify="flex-start" alignItems="center" style={{ marginLeft:40}}>
                        <IconButton aria-label="PDF">
                            <PictureAsPdfIcon style={{ fontSize: 90 }}/>
                        </IconButton>
                        <h1>Decoder</h1>
                </Grid>
                <div class='container'>
                    <br></br>
                <CardCompany />
                <br></br>
                <CardCompany />
                <br></br>
                <CardCompany />
                <br></br>
                    <Grid container direction="row" justify="flex-end" alignItems="center">
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary">
                            Descargar todos
                        </Button>
                    </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default SecondView;