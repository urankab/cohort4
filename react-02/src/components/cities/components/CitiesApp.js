import React, { useState, useEffect } from 'react'
import funcs from '../business/functions'
import CityCards from './CityCards'
import CityForm from './CityForm'
import {
   Grid, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
   root: {
      flexGrow: 1,
   },
   header: {
      backgroundColor: '#ff9b98',
      marginBottom: 10
   },
   // leftC: {
   //    margin: 10
   // },

   // rightC: {
   //    margin: 10,
   // }
});

function CitiesApp() {
   const classes = useStyles();
   const cc = new funcs.Community()
   const [cityCtrl] = useState(cc)
   const [city] = useState(cityCtrl.getNewCity())

   const [message, setMessage] = useState('')
   const [loaded] = useState(true)

   useEffect(() => {
      //Load cities from the API 
      async function fetchData() {
         try {
            await cityCtrl.loadCities()
            loaded(true);
            console.log('cards loaded')
         } catch (e) {
            userMsg("***** Turn the server on dummy! *****", "error");
            console.log(e);
         }
      }
      fetchData();
   }, [cityCtrl, loaded]); //Maybe remove later

   async function onSave(city) {
      await cityCtrl.addOrUpdate(city)
   }

   function userMsg(msg) {
      setMessage({ text: msg })
   }

   async function moveIn(num) {

   }

   async function moveOut(num) {

   }

   async function deleteCard(key) {

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
      </div>
   )
}

export default CitiesApp