import React, { useState, useEffect } from 'react'
import funcs from '../business/functions'
import CityCards from './CityCards'
import CityForm from './CityForm'
import {
   Grid, makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
   // root: {
   //    flexGrow: 1,
   // },
   header: {
      backgroundColor: '#ff9b98',
      marginBottom: 10,
      fontSize: 40
   },
   credit: {
      fontSize: 12,
      color: 'grey'
   }
});

function CitiesApp() {
   const classes = useStyles();
   const cc = new funcs.Community()
   const [cityCtrl, setCityCtrl] = useState(cc)
   const [city] = useState(cityCtrl.getNewCity())

   const [message, setMessage] = useState('')
   const [loaded, setLoaded] = useState()

   useEffect(() => {
      //Load cities from the API 
      async function fetchData() {
         try {
            await cityCtrl.loadCities()
            setLoaded(true);
            console.log('cards loaded')
         } catch (e) {
            userMsg("***** Turn the server on dummy! *****", "error");
            console.log(e);
         }
      }
      fetchData();
   }, [cityCtrl]);

   function userMsg(msg) {
      setMessage({ text: msg })
   }

   async function onSave(city) {
      await cityCtrl.addOrUpdate(city)
   }

   async function moveIn(num) {

   }

   async function moveOut(num) {

   }

   function deleteCard(thekey) {
      console.log(thekey)
      cityCtrl.delete(thekey)
   }

   return (
      <div className={classes.root}>
         <h1 className={classes.header}>Cities</h1>
         <Grid container>
            <Grid item md={2}>
               <CityForm
                  city={city}
                  save={onSave}
                  userMsg={userMsg}
                  message={message.text}
               />
            </Grid>
            <Grid item md={10}>
               <CityCards
                  cities={cityCtrl.cities}
                  moveIn={moveIn}
                  moveOut={moveOut}
                  deleteCard={deleteCard}
               />
            </Grid>
         </Grid>
         <p className={classes.credit}>Population Icon made by <a style={{ color: 'lightpink' }} href="https://www.flaticon.com/authors/freepik"
            title="Freepik">Freepik</a> from <a style={{ color: 'lightpink' }} href="https://www.flaticon.com/"
               title="Flaticon">www.flaticon.com</a></p>
      </div>
   )
}

export default CitiesApp