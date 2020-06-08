global.fetch = require('node-fetch');
import getElephant from './fifo_lifo.js'

jest.fn(() => {
   Promise.resolve({data: {elephant}})
})

test('Test fetching random elephant from API url', async ()=> {
   const resp = await getElephant()
   console.log(resp)
})

