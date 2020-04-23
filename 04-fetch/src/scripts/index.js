import { City, Community } from './cities.js'
import functions from "./citiesFetch.js";

const com = new Community;
const newCity = document.getElementById('name')
const newLat = document.getElementById('latitude')
const newLong = document.getElementById('longitude')
const newPop = document.getElementById('population')
const cardDiv = document.getElementById('cardDiv')
const messageArea = document.getElementById('messageArea')
const url = 'http://127.0.0.1:5000/';
let keyNum = 0;


// async function loadStuff() {
//     let data = await functions.postData(url + 'all')
//     for (let i = 0; i < data.length; i++) {
//         com.cityArray.push(new City(data[i].name, data[i].latitude, data[i].longitude, data[i].population, data[i].key));
//         //com.createCity(data[i].name, data[i].latitude, data[i].longitude, data[i].population, data[i].key)
//         cardDiv.appendChild(com.createCard(com.cityArray[com.cityArray.length - 1]))
//         keyNum = com.cityArray[com.cityArray.length - 1].key + 1
//     }
// }

// loadStuff();

//Load old stuff
window.addEventListener('load', async() => {
    let data = await functions.postData(url + 'all')
    for (let i = 0; i < data.length; i++) {
        com.cityArray.push(new City(data[i].name, data[i].latitude, data[i].longitude, data[i].population, data[i].key));
        //com.createCity(data[i].name, data[i].latitude, data[i].longitude, data[i].population, data[i].key)
        cardDiv.appendChild(com.createCard(com.cityArray[com.cityArray.length - 1]))
        keyNum = com.cityArray[com.cityArray.length - 1].key + 1
    }
})

createBtn.addEventListener('click', async() => {
    if (newCity.value && newLat.value && newLong.value != '') {
        com.createCity(newCity.value, newLat.value, newLong.value, newPop.value, keyNum)
        await functions.postData(url + 'add', { name: newCity.value, latitude: newLat.value, longitude: newLong.value, population: newPop.value, key: keyNum })
        keyNum++;
        messageArea.textContent = `Created ${newCity.value} card with key: ${com.cityArray[com.cityArray.length - 1].key}`;
        cardDiv.appendChild(com.createCard(com.cityArray[com.cityArray.length - 1]))
        updateAnalzer()
        clearFields();
    } else {
        missingFields();
    }
})

function updateAnalzer() {
    let northText = document.getElementById('mostNorthP')
    let southText = document.getElementById('mostSouthP')
    let tPopText = document.getElementById('totalPP')

    northText.textContent = com.getMostNorthern();
    southText.textContent = com.getMostSouthern();
    tPopText.textContent = com.getPopulation();
}

function clearFields() {
    newCity.value = '';
    newLat.value = '';
    newLong.value = '';
    newPop.value = '';
}

function missingFields() {
    messageArea.textContent = ''
    if (newCity.value == '') messageArea.textContent = '*Missing city name'
    if (newLat.value == '') messageArea.textContent += '*Enter Latitude'
    if (newLong.value == '') messageArea.textContent += '*Enter Longitude'
}