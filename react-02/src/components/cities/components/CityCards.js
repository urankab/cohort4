import React from 'react'
import {
   Card, CardContent, CardActions,
   Typography, Button
} from '@material-ui/core';

function CityCards(props) {
   let cards;
   if (props.cities) {
      cards = Object.keys(props.cities).map(k => {
         const p = props.cities[k];
         return (
            <Card className='card'
               key={p.key} mykey={p.key} >
               <Typography variant="h5" component="h2">
                  {p.city}
               </Typography>
               <CardContent>
                  <Typography variant="body2" component="p">
                     {p.lat}
                  </Typography>
                  <Typography variant="body2" component="p">
                     {p.long}
                  </Typography>
               </CardContent>
               <CardActions>
                  <Button variant="outlined" color="primary">Moved In</Button>
                  <Button variant="outlined" color="primary">Moved Out</Button>
                  <Button variant="outlined" color="secondary">Delete</Button>
               </CardActions>
            </Card >
         )
      });
   }

   return (
      <div id='cardDiv'>
         {cards}
      </div>
   )
}

export default CityCards