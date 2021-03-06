import React, { useState, useEffect } from 'react'
import funcs from '../business/functions'
import CityCards from './CityCards'
import CityForm from './CityForm'
import {
   Grid, makeStyles, List, ListItem, ListItemText
} from '@material-ui/core';

const useStyles = makeStyles({
   header: {
      backgroundColor: '#ff9b98',
      marginBottom: 10,
      fontSize: 40
   },
   summary: {
      borderRadius: 15,
      margin: 10,
      backgroundColor: '#ffebf0',
      height: '50%',
      minWidth: 154,
   },
   sumStuff: {
      wordBreak: 'break-word',
      width: 150,
   },
   credit: {
      fontSize: 12,
      color: 'grey'
   },
   divWidth: {
      minWidth: 'fit-content'
   }
});

const cityCtrl = new funcs.Community()

function CitiesApp() {
   const classes = useStyles();
   const [message, setMessage] = useState('')
   const [errorMessage, setErrorMsg] = useState('')

   const [count, setCount] = useState(0)

   const [total, setTotal] = useState()
   const [northest, setNorthest] = useState()
   const [southest, setSouthest] = useState()

   useEffect(() => {
      let isCancelled = false

      const fetchData = async () => {
         try {
            await cityCtrl.loadCities()
            if (!isCancelled) {
               updateSummary()
               console.log('Loaded cities')
            }
         } catch (e) {
            if (!isCancelled) {
               userMsg('Turn on the server')
               console.log(e)
            }
         }
      }
      fetchData();

      return () => {
         isCancelled = true
      }

   }, [count]);

   async function onSave(city) {
      await cityCtrl.addOrUpdate(city)
      setCount(count + 1)
      updateSummary()
   }

   async function deleteCard(thekey) {
      await cityCtrl.deleteCard(thekey)
      setCount(count + 1)
      updateSummary()
   }

   async function moveIn(thekey, num) {
      await cityCtrl.movedIn(thekey, num)
      setCount(count + 1)
      updateSummary()
   }

   async function moveOut(thekey, num) {
      await cityCtrl.movedOut(thekey, num)
      setCount(count + 1)
      updateSummary()
   }

   async function randomCity() {
      await cityCtrl.loadRandomCity()
      setCount(count + 1)
      updateSummary()
   }

   function updateSummary() {
      setTotal(cityCtrl.getTotalPopulation())
      setNorthest(cityCtrl.getMostNorthern())
      setSouthest(cityCtrl.getMostSouthern())
   }

   function userMsg(msg) {
      setMessage({ text: msg })
   }

   function errorMsg(msg) {
      setErrorMsg({ text: msg })
   }

   return (
      <div className={classes.root}>
         <h1 className={classes.header}>Cities</h1>
         <Grid container>
            <Grid item sm={2} className={classes.divWidth}>
               <CityForm
                  city={cityCtrl.getNewCity()}
                  save={onSave}
                  userMsg={userMsg}
                  errorMsg={errorMsg}
                  message={message.text}
                  errorMessage={errorMessage.text}
                  randomCity={randomCity}
               />
            </Grid>
            <Grid item sm={1} className={classes.summary}>
               <List>
                  <ListItem className={classes.sumStuff}>
                     <ListItemText id='total' primary='Total Population:'
                        secondary={total}
                     />
                  </ListItem>
                  <ListItem className={classes.sumStuff}>
                     <ListItemText id='north' primary='Most Northern City:'
                        secondary={northest}
                     />
                  </ListItem>
                  <ListItem className={classes.sumStuff}>
                     <ListItemText id='south' primary='Most Southern City:'
                        secondary={southest}
                     />
                  </ListItem>
               </List>
            </Grid>
            <Grid item md={8}>
               <CityCards
                  cities={cityCtrl.cities}
                  moveIn={moveIn}
                  moveOut={moveOut}
                  deleteCard={deleteCard}
                  userMsg={userMsg}
                  errorMsg={errorMsg}
                  cityCtrl={cityCtrl}
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