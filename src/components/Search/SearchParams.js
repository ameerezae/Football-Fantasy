import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ClubsField from './ClubsField';
import PositionField from './PositionField';
import NameField from './NameField';
import StatusField from './StatusField';
import PriceRange from './PriceRange'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

}));


export default function SearchParams() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
            <Grid item xs={3} alignItems="center">
                <NameField/>
            </Grid>
        </Grid>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
        <Grid item xs={1}>
            <PositionField/>
        </Grid>
        <Grid item xs={1}>
          <ClubsField/>
        </Grid>
        <Grid item xs={1}>
          < StatusField/>
        </Grid>
        <Grid container direction="row" justify="space-evenly" alignItems="center">

        <Grid item xs={2}>
          <PriceRange/>
        </Grid>

      </Grid>
      </Grid>
    </div>
  );
}