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
        com.createCity(newCity.value, newLat.value, newLong.value, newPop.value)
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