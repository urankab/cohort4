import functions from "./citiesFetch.js";

class City {
    constructor(name, latitude, longitude, population, key) {
        this.name = name;
        this.latitude = Number(latitude);
        this.longitude = Number(longitude);
        this.population = Number(population);
        this.key = key;
    }

    show() {
        return `${this.name}: Latitude: ${this.latitude} Longitude: ${this.longitude} Population: ${this.population} Key: ${this.key}`;
    }

    movedIn(num) {
        this.population += Number(num);

    }

    movedOut(num) {
        this.population -= Number(num);

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
        this.url = 'http://127.0.0.1:5000/';
    }

    createCity(name, latitude, longitude, population, key) {
        this.cityArray.push(new City(name, latitude, longitude, population, key));
        return `Created ${name} city with key: ${key}`;
    }

    createCard(city) {
        let newCard = document.createElement('div')
        newCard.setAttribute('class', 'card bg-light mb-3')
        newCard.setAttribute('id', 'card')
        newCard.setAttribute('key', city.key)

        let cityNameText = document.createElement('h3')
        cityNameText.setAttribute('class', 'card-header')
        cityNameText.setAttribute('id', 'cardHead')
        cityNameText.textContent = city.name;
        newCard.append(cityNameText)

        let innerDiv = document.createElement('div')
        newCard.appendChild(innerDiv)
        innerDiv.setAttribute('class', 'card-body')
        innerDiv.setAttribute('id', 'card-body')

        let cityLatText = document.createElement('p')
        cityLatText.setAttribute('class', 'noSpace')
        cityLatText.textContent = `Latitude: ${city.latitude} `;
        innerDiv.append(cityLatText)

        let cityLongText = document.createElement('p')
        cityLongText.setAttribute('class', 'noSpace')
        cityLongText.textContent = `Longitude: ${city.longitude}`;
        innerDiv.append(cityLongText)

        let cityPopText = document.createElement('p')
        cityPopText.setAttribute('class', 'noSpace')
        cityPopText.setAttribute('id', 'cityPopText')
        cityPopText.textContent = `Population: ${city.population}`;
        innerDiv.append(cityPopText)

        let howBigText = document.createElement('p')
        howBigText.setAttribute('class', 'noSpace')
        howBigText.setAttribute('id', 'howBigText')
        howBigText.textContent = city.howBig();
        innerDiv.append(howBigText)

        let sphereText = document.createElement('p')
        sphereText.setAttribute('class', 'noSpace')
        sphereText.textContent = this.whichSphere(city.key);
        innerDiv.append(sphereText)

        let inputGroup = document.createElement('div')
        inputGroup.setAttribute('class', 'input-group mb-3 noSpace')
        innerDiv.appendChild(inputGroup)

        let prepend = document.createElement('div')
        prepend.setAttribute('class', 'input-group-prepend')
        inputGroup.appendChild(prepend)

        let spanTxt = document.createElement('span')
        spanTxt.setAttribute('class', 'input-group-text')
        spanTxt.textContent = 'In/Out #:'
        prepend.appendChild(spanTxt)

        let inputNum = document.createElement('input')
        inputNum.setAttribute('class', 'form-control')
        inputGroup.appendChild(inputNum)

        let messageArea2 = document.createElement('p')
        messageArea2.setAttribute('id', 'messageArea2')
        innerDiv.appendChild(messageArea2)

        let northText = document.getElementById('mostNorthP')
        let southText = document.getElementById('mostSouthP')
        let tPopText = document.getElementById('totalPP')

        let inBtn = document.createElement('button')
        inBtn.appendChild(document.createTextNode('Moved In'))
        inBtn.setAttribute('class', 'btn btn-secondary')
        inBtn.setAttribute('id', 'movedIn')
        cityPopText.setAttribute('id', 'noSpace')

        inBtn.addEventListener('click', async() => {
            if (inputNum.value != '' && inputNum.value > 0) {
                city.movedIn(inputNum.value)
                await functions.postData(this.url + 'update', { name: city.name, latitude: city.latitude, longitude: city.longitude, population: city.population, key: city.key })
                cityPopText.textContent = `Population: ${city.population}`;
                howBigText.textContent = city.howBig()
                messageArea2.textContent = `Added ${inputNum.value} to population`
                inputNum.value = ''
                northText.textContent = this.getMostNorthern();
                southText.textContent = this.getMostSouthern();
                tPopText.textContent = this.getPopulation();
            }
            if (inputNum.value == '') {
                messageArea2.textContent = 'Please enter a number'
            } else if (inputNum.value < 1) {
                messageArea2.textContent = 'Please enter a number larger than 0'
            }
        })

        let outBtn = document.createElement('button')
        outBtn.appendChild(document.createTextNode('Moved Out'))
        outBtn.setAttribute('class', 'btn btn-secondary')
        outBtn.setAttribute('id', 'movedOut')

        outBtn.addEventListener('click', async() => {
            if (inputNum.value != '' && inputNum.value > 0) {
                city.movedOut(inputNum.value)
                await functions.postData(this.url + 'update', { name: city.name, latitude: city.latitude, longitude: city.longitude, population: city.population, key: city.key })
                cityPopText.textContent = `Population: ${city.population}`;
                howBigText.textContent = city.howBig()
                messageArea2.textContent = `Removed ${inputNum.value} from population`
                inputNum.value = ''
                northText.textContent = this.getMostNorthern();
                southText.textContent = this.getMostSouthern();
                tPopText.textContent = this.getPopulation();
                console.log(this.cityArray);
            } else if (inputNum.value == '') {
                messageArea2.textContent = 'Please enter a number'
            } else {
                messageArea2.textContent = 'Please enter a number larger than 0'
            }
        })

        let deleteBtn = document.createElement('button')
        deleteBtn.appendChild(document.createTextNode('Delete'))
        deleteBtn.setAttribute('class', 'btn btn-secondary')

        deleteBtn.addEventListener('click', async() => {
            this.deleteCity(city.key)
            await functions.postData(this.url + 'delete', { name: city.name, latitude: city.latitude, longitude: city.longitude, population: city.population, key: city.key })
            let msg = document.getElementById('messageArea')
            msg.textContent = `Deleted ${city.name}`
            northText.textContent = this.getMostNorthern();
            southText.textContent = this.getMostSouthern();
            tPopText.textContent = this.getPopulation();
            innerDiv.parentElement.remove();
        })

        let bDiv = document.createElement('div')
        bDiv.setAttribute('class', 'btn-group')
        bDiv.setAttribute('id', 'cardBtns')
        bDiv.appendChild(inBtn)
        bDiv.appendChild(outBtn)
        bDiv.appendChild(deleteBtn)
        innerDiv.appendChild(bDiv)

        return newCard;
    }

    deleteCity(key) {
        for (let i = 0; i < this.cityArray.length; i++) {
            if (key == this.cityArray[i].key) {
                this.cityArray.splice(i, 1)
            }
        }
    }

    whichSphere(key) {
        for (let i = 0; i < this.cityArray.length; i++) {
            if (key == this.cityArray[i].key) {
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
        if (this.cityArray.length > 0) {
            let n = Math.max.apply(Math, this.cityArray.map(function(o) {
                return o.latitude;
            }));
            return `Most Northern: ${Object.values(this.cityArray.find(o => o.latitude === n))}`
        }
    }

    getMostSouthern() {
        if (this.cityArray.length > 0) {
            return `Most Southern: ${Object.values(this.cityArray.reduce(function(prev, current) {
            return (prev.latitude < current.latitude) ? prev : current
        }))}`;
        }
    }

    getPopulation() {
        let total = 0;
        for (let i = 0; i < this.cityArray.length; i++) {
            total += Number(this.cityArray[i].population);
        }
        return `Total Population: ${total}`;
    }
}

export { City, Community };