class City {
    constructor(name, latitude, longitude, population, key) {
        this.name = name;
        this.latitude = Number(latitude);
        this.longitude = Number(longitude);
        this.population = population;
        this.key = key;
    }

    show() {
        return `${this.name}: Latitude: ${this.latitude} Longitude: ${this.longitude} Population: ${this.population}`;
    }

    movedIn(num) {
        this.population += Number(num);
        return this.population;
    }

    movedOut(num) {
        this.population -= num;
        return this.population;
    }

    howBig() {
        if (this.population == 0) {
            return "No Population"
        }
        if (this.population > 0 && this.population <= 100) {
            return "Hamlet: 1-100";
        }
        if (this.population > 100 && this.population < 1000) {
            return "Village: 101-999"
        }
        if (this.population >= 1000 && this.population < 20000) {
            return "Town: 1,000-20,000";
        }
        if (this.population >= 20000 && this.population < 100000) {
            return "Large Town: 20,000-100,000";
        }
        if (this.population >= 100000) {
            return "City: 100,000+";
        }
    }
}

class Community {
    constructor() {
        this.cityArray = [];
        this.counter = 1;
    }

    // checkName(name, latitude, longitude, population) { //Check that you don't add acc with same name
    //     if (name != '' && latitude != '' && longitude != '' && population != '') {
    //         for (let i = 0; i < this.cityArray.length; i++) {
    //             if (name == this.cityArray[i].name) {
    //                 return "City already exists";
    //             }
    //         }
    //     } else return "Please enter data in the field(s)";
    // }

    nextKey() {
        return `k${this.counter++}`;
    }

    // getKey() {
    //     for (let i = 0; i < this.cityArray.length; i++) {
    //         if (name == this.cityArray[i].name)
    //             return this.cityArray[i].key
    //     }
    // }

    getNameFromKey(key) {
        for (let i = 0; i < this.cityArray.length; i++) {
            if (key == this.cityArray[i].key)
                return this.cityArray[i].name
        }
    }

    createCity(name, latitude, longitude, population) {
        const key = this.nextKey();
        this.cityArray.push(new City(name, latitude, longitude, population, key));

        return `Created ${name} card with key: ${key}`;

    }

    createCard(city) {
        let container = document.createElement('div')
        let newCard = document.createElement('div')
        container.appendChild(newCard)
        newCard.setAttribute('class', 'card')

        let cityNameText = document.createTextNode(city.name)
        let cityLatText = document.createTextNode(city.latitude)
        let cityLongText = document.createTextNode(city.longitude)
        let sphereText = document.createTextNode(this.whichSphere(city.name))
        let howBigText = document.createTextNode(city.howBig())
        let cityPopText = document.createTextNode(city.population)

        let bl = document.createElement('br')
        let bl2 = document.createElement('br')
        let bl3 = document.createElement('br')
        let bl4 = document.createElement('br')
        let bl5 = document.createElement('br')
        let bl6 = document.createElement('br')

        newCard.appendChild(cityNameText)
        newCard.appendChild(bl)
        newCard.appendChild(document.createTextNode('Latitude: '))
        newCard.appendChild(cityLatText)
        newCard.appendChild(bl2)
        newCard.appendChild(document.createTextNode('Longitude: '))
        newCard.appendChild(cityLongText)
        newCard.appendChild(bl3)
        newCard.appendChild(document.createTextNode('Sphere: '))
        newCard.appendChild(sphereText)
        newCard.appendChild(bl4)
        newCard.appendChild(document.createTextNode('Population: '))
        newCard.appendChild(cityPopText)
        newCard.appendChild(bl5)
        newCard.appendChild(document.createTextNode('How Big? '))
        newCard.appendChild(howBigText)
        newCard.appendChild(bl6)


        let input = document.createElement('input')
        input.setAttribute('type', 'number')

        let inBtn = document.createElement('button')
        inBtn.appendChild(document.createTextNode('Moved In'))
        inBtn.setAttribute('class', 'cardBtn')

        inBtn.addEventListener('click', () => {
            if (input.value != '') {
                city.movedIn(Number(input.value))
                cityPopText.textContent = city.population;
                howBigText.textContent = city.howBig()
            } else {
                messageArea2.textContent = 'Please enter a number'
            }
        })

        let outBtn = document.createElement('button')
        outBtn.appendChild(document.createTextNode('Moved Out'))
        outBtn.setAttribute('class', 'cardBtn')

        let deleteBtn = document.createElement('button')
        deleteBtn.appendChild(document.createTextNode('Delete'))
        deleteBtn.setAttribute('class', 'cardBtn')

        let messageArea2 = document.createElement('p')

        newCard.appendChild(input)
        newCard.appendChild(inBtn)
        newCard.appendChild(outBtn)
        newCard.appendChild(deleteBtn)
        newCard.appendChild(messageArea2)

        return newCard;
    }

    // createCard(city) {

    //     let newCard = document.createElement('div')
    //         //container.appendChild(newCard)
    //     newCard.setAttribute('class', 'card')

    //     let info = document.createTextNode(city.show());
    //     newCard.append(info)

    //     //     let cityNameText = document.createTextNode(city.name)
    //     //     let cityLatText = document.createTextNode(city.latitude)
    // }

    deleteCity(name) {
        for (let i = 0; i < this.cityArray.length; i++) {
            if (name == this.cityArray[i].name) {
                this.cityArray.splice(i, 1)
            }
        }
    }

    whichSphere(name) {
        for (let i = 0; i < this.cityArray.length; i++) {
            if (name == this.cityArray[i].name) {
                if (this.cityArray[i].latitude > 0) {
                    return "Northern Hemisphere"
                }
                if (this.cityArray[i].latitude < 0) {
                    return "Southern Hemisphere"
                }
                if (this.cityArray[i].latitude == 0) {
                    return "On Equator"
                }
            }
        }
    }

    getMostNorthern() {
        let highestLat = 0;
        let highestName = ''
        for (let i = 0; i < this.cityArray.length; i++) {
            if (this.cityArray[i].latitude > highestLat) {
                highestName = this.cityArray[i].name;
                highestLat = this.cityArray[i].latitude;
            }
        }
        return `Most Northern City: ${highestName} at ${highestLat} latitude`
    }

    getMostSouthern() {
        let lowestLat = 0;
        let lowestName = ''
        for (let i = 0; i < this.cityArray.length; i++) {
            if (this.cityArray[i].latitude < lowestLat) {
                lowestName = this.cityArray[i].name;
                lowestLat = this.cityArray[i].latitude;
            }
        }
        return `Most Southern City: ${lowestName} at ${lowestLat} latitude`
    }

    getPopulation() {
        let total = 0;
        for (let i = 0; i < this.cityArray.length; i++) {
            total += Number(this.cityArray[i].population); //Hold onto balances in arrays thru iteration
        }
        return `Total Population: ${total}`;
    }
}

export { City, Community };