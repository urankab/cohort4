import { City, Community } from './cities.js'

const com = new Community;

const newCity = document.getElementById('name')
const newLat = document.getElementById('latitude')
const newLong = document.getElementById('longitude')
const newPop = document.getElementById('population')
const leftSide = document.getElementById('leftContainer')
const messageArea = document.getElementById("messageArea")

document.body.addEventListener("click", e => {
    const el = e.target;
    const todo = el.getAttribute('todo')
    const key = el.getAttribute('key')

    if (todo === 'create') {
        if (com.checkName(newCity.value)) {
            messageArea.textContent = "City name already exists"
        } else {
            com.createCity(newCity.value, newLat.value, newLong.value, newPop.value)
            console.log(com.cityArray)
            leftSide.appendChild(com.createCard(com.cityArray[com.cityArray.length - 1]))
            messageArea.textContent = `Created ${newCity.value} card`
            newCity.value = '';
            newLat.value = '';
            newLong.value = '';
            newPop.value = '';
        }
    }

    if (todo === 'getNorth') {
        if (com.cityArray.length > 0) {
            messageArea.textContent = com.getMostNorthern()
        }
    }

    if (todo === 'getSouth') {
        if (com.cityArray.length > 0) {
            messageArea.textContent = com.getMostSouthern()
        }
    }

    if (todo === 'getTotal') {
        messageArea.textContent = com.getPopulation()
    }
})