import React from 'react'
import {
   Card, CardContent, CardActions,
   Typography, Button, TextField, Grid, makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
   root: {
      backgroundColor: '#ffdbb1',
      display: 'flex',
      flexWrap: 'wrap',
      // minWidth: 440,
      borderRadius: 15,
      margin: 10
   },
   card: {
      margin: 10,
      borderRadius: 15,
      textAlign: 'center',
      // minWidth: 250,

   }
});

function CityCards(props) {
   const classes = useStyles();
   let cards;
   if (props.cities) {
      cards = Object.keys(props.cities).map(k => {
         const p = props.cities[k];
         return (
            <Card className={classes.card}
               // className='card'
               key={p.key} mykey={p.key} >
               <Typography variant="h5" component="h2">
                  {p.city}
               </Typography>
               <CardContent>
                  <Typography variant="body2" component="p">
                     Latitude: {p.lat}
                  </Typography>
                  <Typography variant="body2" component="p">
                     Longitude: {p.long}
                  </Typography>
                  <Typography variant="body2" component="p">
                     Population:
                  </Typography>
                  <Typography variant="body2" component="p">
                     How Big?
                  </Typography>
                  <Typography variant="body2" component="p">
                     Which Sphere?
                  </Typography>
                  <TextField label='#' type='number' />
               </CardContent>
               <CardActions>
                  <Button variant="outlined" color="primary">Moved In</Button>
                  <Button variant="outlined" color="primary">Moved Out</Button>
                  {/* <Button variant="outlined" color="secondary">Delete</Button> */}
               </CardActions>
               <CardActions style={{ justifyContent: 'center', paddingTop: 0 }}>
                  <Button variant="outlined" color="secondary">Delete</Button>
               </CardActions>
            </Card >
         )
      });
   }

   return (
      <Grid className={classes.root}>
         {cards}
      </Grid>
   )
}

export default CityCards