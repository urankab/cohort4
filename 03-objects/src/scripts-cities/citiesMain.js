import { City, Community } from './cities.js'

const com = new Community;
const newCity = document.getElementById('name')
const newLat = document.getElementById('latitude')
const newLong = document.getElementById('longitude')
const newPop = document.getElementById('population')
const cardDiv = document.getElementById('cardDiv')
const messageArea = document.getElementById('messageArea')
const createBtn = document.getElementById('createBtn')


createBtn.addEventListener('click', () => {
    if (newCity.value && newLat.value && newLong.value != '') {

        let createdCity = ''
        createdCity = com.createCity(newCity.value, newLat.value, newLong.value, newPop.value)

        cardDiv.appendChild(com.createCard(com.cityArray[com.cityArray.length - 1]))
        messageArea.textContent = createdCity;
        clearFields();
    } else {
        missingFields();
    }
})

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