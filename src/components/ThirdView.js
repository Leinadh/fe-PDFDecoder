import React, {Component} from 'react';
import '../assets/css/ThirdView.css';

import CardCompany from './CardCompany';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import IconButton from '@material-ui/core/IconButton';
import Variables from './Variables';
import Paper from '@material-ui/core/Paper';

class ThirdView extends Component{
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
                    <Paper elevation={3} > 
                        <Grid container direction="row" justify="space-evenly" alignItems="center">
                            <h3>Empresa Pepito Sac</h3>
                        </Grid>
                        <Grid container direction="row" justify="space-evenly" alignItems="center">
                            <h5>Fecha: 05/06/2020</h5>
                            <h5>Unidades de medida: Soles</h5>
                        </Grid>
                    </Paper>
                    <br></br>
                    <Variables/>
                </div>
            </div>
        );
    }
}

export default ThirdView;