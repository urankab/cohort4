import { City, Community } from './cities.js'

let com = new Community;

let newCity = document.getElementById('name')
let newLat = document.getElementById('latitude')
let newLong = document.getElementById('longitude')
let newPop = document.getElementById('population')
let leftSide = document.getElementById('leftContainer')
let messageArea = document.getElementById("messageArea")

document.body.addEventListener("click", e => {
    if (e.target.nodeName === 'BUTTON') {
        if (e.target.textContent === 'Create') {
            com.createCity(newCity.value, newLat.value, newLong.value, newPop.value)
            console.log(com.cityArray)
            leftSide.appendChild(com.createCard(com.cityArray[com.cityArray.length - 1]))
        }

        if (e.target.textContent === 'Get Most Northern City') {
            if (com.cityArray.length > 0) {
                messageArea.textContent = com.getMostNorthern()
            }
        }
        if (e.target.textContent === 'Get Most Southern City') {
            if (com.cityArray.length > 0) {
                messageArea.textContent = com.getMostSouthern()
            }
        }
        if (e.target.textContent === 'Total Population') {
            if (com.cityArray.length > 0) {
                messageArea.textContent = com.getPopulation()
            }
        }
    }
})