import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CsvDownload from 'react-json-to-csv';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { docInfo, setDocSelected, ind, changeView } = props;
  // console.log('docInfo:: ', docInfo);
  return (
    <Card style={{ marginTop: 30, marginBottom: 30 }} variant="outlined">
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <CardHeader
          title={
            docInfo['DOCUMENTO'] ? docInfo['DOCUMENTO'] : docInfo['file_name']
          }
        />
        <CardActions>
          <Grid item xs={8}>
            <Button
              variant="outlined"
              color="primary"
              component="span"
              onClick={() => {
                setDocSelected(ind);
                // console.log('ind:: ', ind);
                changeView('detail');
              }}
            >
              VER REPORTE
            </Button>
          </Grid>
          <Grid item xs={3}>
            {/* <IconButton aria-label="Descargar">
              <ArrowDownwardIcon fontSize="inherit" />
            </IconButton> */}
            <CsvDownload
              style={{
                //pass other props, like styles
                borderRadius: '4px',
                display: 'flex',
                width: 'auto',
                fontSize: '0.875rem',
                padding: '6px 16px',
                lineHeight: '1.75',
                boxShadow: 'none',
              }}
              data={[docInfo]}
              filename={docInfo.file_name + '.csv'}
            >
              DESCARGAR
            </CsvDownload>
          </Grid>
        </CardActions>
      </Grid>
    </Card>
  );
}
