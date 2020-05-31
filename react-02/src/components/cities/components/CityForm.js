import React, { useState } from 'react'
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
      padding: 15,
      paddingLeft: 0,
      paddingRight: 0
   },
   btnPadding: {
      margin: 15,
   },
   msg: {
      paddingBottom: 15,
      fontSize: 12,
      color: 'red'
   }
});

function CityForm(props) {
   const classes = useStyles();
   const city = props.city;
   const [errorName, setErrorName] = useState(false)
   const [errorLat, setErrorLat] = useState(false)
   const [errorLong, setErrorLong] = useState(false)
   const [errorPop, setErrorPop] = useState(false)

   function focusElement(name) {
      const el = document.querySelector(`[name=${name}]`);
      el.focus();
      el.select();
   }

   function onSave(e) {
      const cityToSave = {}
      cityToSave.key = city.key
      const idCityForm = document.getElementById('form')
      const inputs = idCityForm.getElementsByTagName('input')

      for (let i = 0; i < inputs.length; i++) {
         cityToSave[inputs[i].name] = inputs[i].value;
      }

      try {
         if (!cityToSave.name) {
            focusElement('name');
            setErrorName(true)
            throw new Error('*Please enter a city name');
         }
         if (cityToSave.name) {
            setErrorName(false)
         }
         if (cityToSave.population === '') {
            focusElement('population');
            setErrorPop(true)
            throw new Error('*Population cannot be blank');
         }
         if (cityToSave.population) {
            setErrorPop(false)
         }
         if (!cityToSave.latitude) {
            focusElement('latitude');
            setErrorLat(true)
            throw new Error('*Please enter the latitude');
         }
         if (cityToSave.latitude) {
            setErrorLat(false)
         }
         if (!cityToSave.longitude) {
            focusElement('longitude');
            setErrorLong(true)
            throw new Error('*Please enter the longitude');
         }
         if (cityToSave.longitude) {
            setErrorLong(false)
         }
         props.save(cityToSave);
         props.userMsg(`Saved ${cityToSave.name}`);
      } catch (e) {
         props.userMsg(e.message, "error");
      }
      e.preventDefault();
   }

   return (
      <form id='form' className={classes.root}>
         <Grid>
            <Typography variant='h5' component="h2" className={classes.item}>
               Create a City
            </Typography>
            <Typography className={classes.msg} id='addMsg'>
               {props.message}
            </Typography>
            <TextField name='name' label='City Name:' className={classes.item}
               error={errorName}
               defaultValue={city.name} />
            <TextField name='population' label='Population:' type='number' className={classes.item}
               error={errorPop}
               defaultValue={city.population} />
            <br></br>
            <TextField name='latitude' label='Latitude:' type='number' className={classes.item}
               error={errorLat}
               defaultValue={city.latitude} />
            <TextField name='longitude' label='Longitude:' type='number' className={classes.item}
               error={errorLong}
               defaultValue={city.longitude} />
            <br></br>
            <Button
               className={classes.btnPadding}
               variant="contained"
               color="primary"
               size="large"
               startIcon={<SaveIcon />}
               onClick={onSave}
            >Save</Button>
         </Grid>
      </form>
   )
}

export default CityForm