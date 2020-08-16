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
      // minWidth: '50%',
      // minWidth: 173,
   },
   item: {
      padding: 15,
      paddingLeft: 0,
      paddingRight: 0,
   },
   header: {
      paddingTop: 15,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0
   },
   btnPadding: {
      margin: 10,
   },
   msg: {
      paddingBottom: 15,
      fontSize: 14,
      color: '#4BB543'
   },
   errorMsg: {
      paddingBottom: 15,
      fontSize: 14,
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

   function onRandomCity() {
      props.randomCity()
      props.userMsg('Loaded a random city')
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
         clearField()
         props.errorMsg('')
         props.userMsg(`Saved ${cityToSave.name}`);
      } catch (e) {
         props.errorMsg(e.message, "error");
         props.userMsg('')
      }
      e.preventDefault();
   }

   function clearField() {
      let inputs = document.getElementsByTagName('input')
      for (let i = 0; i < inputs.length; i++) {
         inputs[i].value = ''
      }
   }

   return (
      <form id='form' className={classes.root}>
         <Grid>
            <Typography variant='h5' component="h2" className={classes.header}>
               Create a City
            </Typography>
            <Typography variant='subtitle2' className={classes.msg} id='addMsg'>
               {props.message}
            </Typography>
            <Typography variant='subtitle2' className={classes.errorMsg} id='errorMsg'>
               {props.errorMessage}
            </Typography>
            <TextField name='name' label='City Name:' className={classes.item}
               InputLabelProps={{
                  style: {
                     width: '-webkit-fill-available'
                  }
               }}
               error={errorName} inputProps={{ style: { textAlign: 'center' } }}
               defaultValue={city.name} />
            <TextField name='population' label='Population:' type='number' className={classes.item}
               InputLabelProps={{
                  style: {
                     width: '-webkit-fill-available'
                  }
               }}
               error={errorPop} inputProps={{ style: { textAlign: 'center' } }}
               defaultValue={city.population} />
            <br></br>
            <TextField name='latitude' label='Latitude:' type='number' className={classes.item}
               InputLabelProps={{
                  style: {
                     width: '-webkit-fill-available'
                  }
               }}
               error={errorLat} inputProps={{ style: { textAlign: 'center' } }}
               defaultValue={city.latitude} />
            <TextField name='longitude' label='Longitude:' type='number' className={classes.item}
               InputLabelProps={{
                  style: {
                     width: '-webkit-fill-available'
                  }
               }}
               error={errorLong} inputProps={{ style: { textAlign: 'center' } }}
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
            <Button
               className={classes.btnPadding}
               variant="contained"
               size="large"
               color="primary"
               onClick={onRandomCity}
            >
               Random City
            </Button>
         </Grid>
      </form>
   )
}

export default CityForm