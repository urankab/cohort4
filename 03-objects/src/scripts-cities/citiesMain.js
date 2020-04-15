import { City, Community } from './cities.js'

const com = new Community;
const newCity = document.getElementById('name')
const newLat = document.getElementById('latitude')
const newLong = document.getElementById('longitude')
const newPop = document.getElementById('population')
const cardDiv = document.getElementById('cardDiv')
const messageArea = document.getElementById('messageArea')
const createBtn = document.getElementById('createBtn')
const data = document.getElementById('data')

createBtn.addEventListener('click', () => {
    if (newCity.value && newLat.value && newLong.value != '') {
        document.getElementById('data').textContent = '';
        let createdCity = ''
        createdCity = com.createCity(newCity.value, newLat.value, newLong.value, newPop.value)

        console.log(com.cityArray[com.cityArray.length - 1])
        cardDiv.appendChild(com.createCard(com.cityArray[com.cityArray.length - 1]))
        messageArea.textContent = createdCity;
        clearFields();
    } else {
        missingFields();
    }
})

document.body.addEventListener("click", e => {
    if (e.target.nodeName === 'BUTTON') {
        if (e.textContent === 'Moved In' || 'Moved Out') {
            document.getElementById('data').textContent = '';
            com.updateAnalyzer();
            console.log(com.cityArray)
        }
    }
});

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