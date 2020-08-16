const axios = require('axios');

async function getElephant() {
    const response = await axios.get('https://elephant-api.herokuapp.com/elephants/random');
    return response.data[0]
    // const { name, sex, species, note } = elephant
    // document.getElementById('name').value = name
    // document.getElementById('gender').value = sex
    // document.getElementById('species').value = species
    // document.getElementById('about').value = note
    // })
}

//Also works

// import axios from 'axios';

// async function getElephant() {
//     const response = await axios.get('https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants/random');
//     // return response.data[0]
//     return response.data.forEach((elephant) => {
//         let { name, sex, species, note } = elephant
//         document.getElementById('name').value = name
//         document.getElementById('gender').value = sex
//         document.getElementById('species').value = species
//         document.getElementById('about').value = note
//     })
// }

module.exports = getElephant;