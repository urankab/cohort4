import { City, Community } from './cities.js'

const com = new Community;

const newCity = document.getElementById('name')
const newLat = document.getElementById('latitude')
const newLong = document.getElementById('longitude')
const newPop = document.getElementById('population')
const leftSide = document.getElementById('leftContainer')
const cardDiv = document.getElementById('cardDiv')
const messageArea = document.getElementById('messageArea')

const createBtn = document.getElementById('createBtn')



createBtn.addEventListener('click', () => {
    if (newCity.value && newLat.value && newLong.value) {
        let createdCity = ''
        createdCity = com.createCity(newCity.value, newLat.value, newLong.value, newPop.value)
        console.log(com.cityArray)

        cardDiv.appendChild(com.createCard(com.cityArray[com.cityArray.length - 1]))

        newCity.value = '';
        newLat.value = '';
        newLong.value = '';
        newPop.value = '';
        messageArea.textContent = createdCity;
    } else {
        messageArea.textContent = ''
        if (newCity.value == '') messageArea.textContent = '*Missing city name'
        if (newLat.value == '') messageArea.textContent += '*Enter Latitude'
        if (newLong.value == '') messageArea.textContent += '*Enter Longitude'
    }
})

// if (todo === 'getNorth') {
//     if (com.cityArray.length > 0) {
//         messageArea.textContent = com.getMostNorthern()
//     }
// }

// if (todo === 'getSouth') {
//     if (com.cityArray.length > 0) {
//         messageArea.textContent = com.getMostSouthern()
//     }
// }

// if (todo === 'getTotal') {
//     messageArea.textContent = com.getPopulation()
// }