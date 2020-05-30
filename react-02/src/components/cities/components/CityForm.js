import React from 'react'
import {
   Typography, Button, TextField, Grid, makeStyles
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles({
   root: {
      borderRadius: 15,
      margin: 10,
      backgroundColor: '#ffd6e1',
   },
   item: {
      padding: 15
   },
   btnPadding: {
      margin: 15
   }
});

function CityForm(props) {
   const classes = useStyles();
   const city = props.city;

   return (
      <form className={classes.root}>
         <Grid>
            <Typography variant='h5' component="h2" className={classes.item}>
               Create a City
            </Typography>
            <TextField required label='City Name:' className={classes.item}
               defaultValue={city.name} />
            <TextField label='Population:' type='number' className={classes.item}
               defaultValue={city.population} />
            <br></br>
            <TextField required label='Latitude:' type='number' className={classes.item}
               defaultValue={city.latitude} />
            <TextField required label='Longitude:' type='number' className={classes.item}
               defaultValue={city.longitude} />
            <br></br>
            <Button
               className={classes.btnPadding}
               variant="contained"
               color="primary"
               size="large"
               startIcon={<SaveIcon />}
            >Save</Button>
         </Grid>
      </form>
   )
}

export default CityForm