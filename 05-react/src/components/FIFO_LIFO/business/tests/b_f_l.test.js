const getElephant = require('../__mocks__/fifo_lifo.js');
const axios = require('axios');

jest.mock('axios');

test('Testing mocking an api call', async () => {
   axios.get.mockResolvedValue({
      data: [
         {
            name: 'Karly',
            species: 'Asian',
            sex: 'male',
            note: 'Addicted to lettuce'
         }
      ]
   })
   const el = await getElephant()
   expect(el).toEqual({ "name": "Karly", "note": "Addicted to lettuce", "sex": "male", "species": "Asian" })
})


global.fetch = require('node-fetch')

test('Testing api call', async () => {
   const url = 'https://elephant-api.herokuapp.com/elephants/random';

   const response = await fetch(url)
   const data = await response.json()
   expect(response.status).toBe(200)
   expect(data[0].name).not.toBe('')

   //Same thing as above
   // await fetch(url).then((response) => {
   //    expect(response.status).toBe(200);
   //    return response.json()
   // }).then((elephant) => {
   //    expect(elephant[0].name).not.toBe('')
   // })
})
