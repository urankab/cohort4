import React, { useState } from 'react'
import {
   Card, CardContent, CardActions,
   List, ListItem, ListItemText, Button,
   TextField, Typography, Grid, makeStyles
} from '@material-ui/core';
import latSvg from '../svgs/lat.svg'
import longSvg from '../svgs/long.svg'
import popSvg from '../svgs/mother.svg'

const useStyles = makeStyles({
   root: {
      backgroundColor: '#ffdbb1',
      display: 'flex',
      flexWrap: 'wrap',
      borderRadius: 15,
      margin: 10,
   },
   cardContent: {
      padding: 0,
   },
   cardHeader: {
      paddingBottom: 15
   },
   card: {
      margin: 10,
      padding: 10,
      borderRadius: 15,
      textAlign: 'center',
   },
   img: {
      height: 40,
      verticalAlign: 'middle',
   },
   list: {
      padding: 0,
      paddingBottom: 0
   },
   listItem: {
      width: 'fit-content',
      textAlign: 'center',
      display: 'inline-block',
      paddingTop: 0,
      paddingBottom: 0

   },
   listItemInput: {
      width: 'fit-content',
      display: 'inline-block',
      paddingTop: 0,
      paddingBottom: 8
   },
   listText: {
      textAlign: 'center',
      padding: 0,
   },
   buttonArea: {
      padding: 0,
      display: 'inline-block'
   }
});

function CityCards(props) {
   const [inputValue, setInputChange] = useState()
   const classes = useStyles();
   let cards;
   if (props.cities) {
      cards = Object.keys(props.cities).map(k => {
         const p = props.cities[k];
         return (
            <Card className={classes.card}
               key={p.key} mykey={p.key} >
               <CardContent style={{ paddingBottom: 0 }} className={classes.cardContent}>
                  <List className={classes.list}>
                     <Typography variant='h5' className={classes.cardHeader} id='name'>
                        {p.name}
                     </Typography>
                     <ListItem className={classes.listItem}>
                        <img className={classes.img} src={latSvg} alt='latitude'></img>
                        <ListItemText className={classes.listText}
                           primary='Latitude:'
                           secondary={
                              <Typography variant="subtitle2" id='lat'>
                                 {p.latitude}
                              </Typography>
                           } />
                     </ListItem>
                     <ListItem className={classes.listItem}>
                        <img className={classes.img} src={longSvg} alt='longitude'></img>
                        <ListItemText className={classes.listText}
                           primary='Longitude:'
                           secondary={
                              <Typography variant="subtitle2" id='long'>
                                 {p.longitude}
                              </Typography>
                           } />
                     </ListItem>
                     <ListItem className={classes.listItem}>
                        <img className={classes.img} src={popSvg} alt='people'></img>
                        <ListItemText className={classes.listText}
                           primary='Population:'
                           secondary={
                              <Typography variant="subtitle2" id='pop'>
                                 {p.population}
                              </Typography>
                           } />
                     </ListItem>
                  </List>
                  <List className={classes.list}>
                     <ListItem className={classes.listItem}>
                        <ListItemText className={classes.listText} id='howBig'
                           primary='How Big? '
                           secondary={props.cityCtrl.howBig(p.population)}></ListItemText>
                     </ListItem>
                     <ListItem className={classes.listItem}>
                        <ListItemText className={classes.listText} id='whichSphere'
                           primary='Which Sphere? '
                           secondary={props.cityCtrl.whichSphere(p.latitude)}></ListItemText>
                     </ListItem>
                  </List>
                  <List className={classes.list}>
                     <ListItem className={classes.listItemInput} >
                        <TextField label='#' htmlFor='hi' type='number' onChange={handleInputChange}
                           name='inputChange' inputProps={{
                              "data-testid": "content-input",
                              style: { textAlign: 'center' }
                           }} />
                     </ListItem>
                  </List>
                  <CardActions className={classes.buttonArea}>
                     <Button variant="outlined" color="primary" onClick={onMoveIn} mykey={p.key}>Moved In</Button>
                     <Button variant="outlined" color="primary" onClick={onMoveOut}>Moved Out</Button>
                     <Button variant="outlined" color="secondary" onClick={deleteCity}>Delete</Button>
                  </CardActions>
               </CardContent>
            </Card >
         )
      });
   }

   function deleteCity(e) {
      let thekey = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('mykey')
      props.deleteCard(thekey)
      props.errorMsg('')
      props.userMsg('Deleted city')
   }

   function handleInputChange(e) {
      setInputChange(e.currentTarget.value)
   }

   function onMoveIn(e) {
      let thekey = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('mykey')
      const cityObj = props.cityCtrl.get(thekey)
      if (inputValue > 0) {
         props.moveIn(cityObj, inputValue)
         props.errorMsg('')
         props.userMsg(`${inputValue} moved to ${cityObj.name}`)
         clearField()
         setInputChange('')
      } else {
         props.userMsg('')
         clearField()
         props.errorMsg('Population increase must be atleast 1')
      }
   }

   function onMoveOut(e) {
      let thekey = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('mykey')
      const cityObj = props.cityCtrl.get(thekey)

      if (inputValue > 0) {
         if (cityObj.population - inputValue >= 0) {
            props.moveOut(cityObj, inputValue)
            props.errorMsg('')
            props.userMsg(`${inputValue} moved out from ${cityObj.name}`)
            clearField()
            setInputChange('')
         } else {
            clearField()
            props.errorMsg('City population cannot be negative')
         }
      } else {
         props.userMsg('')
         props.errorMsg('Please enter a value to move out')
      }
   }

   function clearField() {
      let inputs = document.getElementsByName('inputChange')
      for (let i = 0; i < inputs.length; i++) {
         inputs[i].value = ''
      }
   }

   return (
      <Grid className={classes.root}>
         {cards}
      </Grid>
   )
}

export default CityCards