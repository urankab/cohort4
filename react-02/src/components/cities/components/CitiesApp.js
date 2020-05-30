import React, { useState, useEffect } from 'react'
import funcs from '../business/functions'
import CityCards from './CityCards'
import CityForm from './CityForm'

function CitiesApp() {
   const cc = new funcs.Community()
   const [cityCtrl] = useState(cc)
   const [city] = useState(cityCtrl.getNewCity())

   const [message, setMessage] = useState('')
   const [loaded, setLoad] = useState()
   const [showForm] = useState(true)

   useEffect(() => {
      //Load cities from the API 
      async function fetchData() {
         try {
            await cityCtrl.loadCities()
            setLoad(true);
            console.log('cards loaded')
         } catch (e) {
            userMsg("***** Turn the server on dummy! *****", "error");
            console.log(e);
         }
      }
      fetchData();
   }, []);

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

   let cardStuff;
   let createCard;

   if (loaded === true) {
      cardStuff =
         <CityCards
            cities={cityCtrl.cities}
            moveIn={moveIn}
            moveOut={moveOut}
            deleteCard={deleteCard}
         />
   }

   if (showForm === true) {
      createCard =
         <CityForm
            city={city}
            save={onSave}
            userMsg={userMsg}
         />
   }

   return (
      <div>
         <h1>Cities</h1>
         <div className='cardMainContainer'>
            <div id='leftContainer'>
               {cardStuff}
            </div>
            <div id='rightContainer'>
               {createCard}
            </div>
         </div>
      </div>
   )
}

export default CitiesApp