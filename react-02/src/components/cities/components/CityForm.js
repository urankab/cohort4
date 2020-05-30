import React from 'react'
import {
   Typography, Button, TextField, makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root: {
      '& .MuiTextField-root': {
         margin: theme.spacing(1),
         width: '25ch',
      },
   },
}));

function CityForm(props) {
   const city = props.city;
   const classes = useStyles();

   return (
      <form className={classes.root} >
         <div id='createStuff'>
            <Typography className='header' variant="h5" component="h2">
               Create a City/>
            </Typography>
            <TextField required={true} label='City Name:'
               defaultValue={city.name} />
            <TextField required={true} label='Latitude:'
               defaultValue={city.latitude} />
            <TextField required={true} label='Longitude:'
               defaultValue={city.longitude} />
            <TextField required={true} label='Population:'
               defaultValue={city.population} />
         </div>
      </form>
   )
}

export default CityForm