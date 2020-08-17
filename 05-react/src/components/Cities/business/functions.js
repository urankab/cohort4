import data from '../data.js'

// const url = 'http://localhost:5000/';
const url = 'https://my-react-api.herokuapp.com/'

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;

    return json;
}

class City {
    static lastKey = 0;
    constructor(obj) {
        const defaults = {
            name: '', latitude: '', longitude: '', population: '', key: ''
        }
        const data = { ...defaults, ...obj };
        this.name = data.name;
        this.latitude = data.latitude;
        this.longitude = data.longitude;
        this.population = data.population;
        this.key = data.key;
    }

    show() {
        return `${this.name}\nLatitude: ${this.latitude}\nLongitude: ${this.longitude}\nPopulation: ${this.population}\nKey: ${this.key}`;
    }
}

class Community {
    constructor() {
        this.cities = {};
        this.lastKey = 0;
    }

    length() {
        return Object.keys(this.cities).length
    }

    get(key) {
        return this.cities[key]
    }

    getNewCity() {
        return new City({})
    }

    async loadCities() {
        //Create a dictionary of cities and keep track of the last key
        const data = await postData(url + "all");
        const cities = {};
        data.forEach(x => {
            cities[x.key] = x;
            this.lastKey = (x.key > this.lastKey) ? x.key : this.lastKey;
        });
        this.cities = cities;
    }

    async loadRandomCity() {
        const values = Object.values(data)
        const randomCity = values[parseInt(Math.random() * values.length)]
        this.lastKey++
        randomCity.key = this.lastKey
        randomCity.latitude = Number(randomCity.latitude)
        randomCity.longitude = Number(randomCity.longitude)
        randomCity.population = Number(randomCity.population)
        this.cities[randomCity.key] = randomCity
        await postData(url + 'add', randomCity)
    }

    async addOrUpdate(city) {
        let theUrl;

        if (city.key) {
            theUrl = url + 'update'
        } else {
            theUrl = url + 'add'
            this.lastKey++;
            city.key = this.lastKey;
            city.population = Number(city.population)
            city.latitude = Number(city.latitude)
            city.longitude = Number(city.longitude)
        }
        await postData(theUrl, city);
        this.cities[city.key] = city;
    }

    async movedIn(city, num) {
        let theUrl
        if (city.key) {
            city.population += Number(num)
            theUrl = url + 'update'
        }
        await postData(theUrl, city)
    }

    async movedOut(city, num) {
        let theUrl
        if (city.key) {
            city.population -= Number(num)
            theUrl = url + 'update'
        }
        await postData(theUrl, city)
    }

    async deleteCard(thekey) {
        let theUrl;
        if (thekey) {
            theUrl = url + 'delete'
        }
        await postData(theUrl, { key: Number(thekey) });
    }

    getMostNorthern() {
        // if (this.length() <= 0) return '';
        let mostNorthernCity;
        for (const key in this.cities) {
            if (!mostNorthernCity) {
                mostNorthernCity = this.cities[key];
                continue;
            }
            if (this.cities[key].latitude > mostNorthernCity.latitude) {
                mostNorthernCity = this.cities[key];
            }
        }
        if (this.length() <= 0) {
            return null
        }
        return `${mostNorthernCity.name} at ${mostNorthernCity.latitude}°`;
    }

    getMostSouthern() {
        let latitudeArray = []
        let theName;
        for (let key in this.cities) {
            latitudeArray.push(this.cities[key].latitude)
        }
        let mostSouthLat = Math.min.apply(null, latitudeArray);
        for (let key in this.cities) {
            if (mostSouthLat === this.cities[key].latitude) {
                theName = this.cities[key].name
            }
        }
        if (this.length() > 0) {
            return `${theName} at ${mostSouthLat}°`
        }
    }

    getTotalPopulation() {
        let total = 0
        for (let key in this.cities) {
            total += Number(this.cities[key].population)
        }
        if (this.length() > 0) {
            return total
        }
    }

    howBig(pop) {
        if (pop === 0) {
            return "No Population"
        }
        if (pop > 0 && pop <= 100) {
            return "Hamlet: 1-100";
        }
        if (pop > 100 && pop < 1000) {
            return "Village: 101-999"
        }
        if (pop >= 1000 && pop < 20000) {
            return "Town: 1,000-20,000";
        }
        if (pop >= 20000 && pop < 100000) {
            return "Large Town: 20,000-100,000";
        }
        if (pop >= 100000) {
            return "City: 100,000+";
        }
    }

    whichSphere(latitude) {
        if (latitude > 0) {
            return 'Northern Hemisphere'
        }
        if (latitude === 0) {
            return 'Equater'
        }
        if (latitude < 0) {
            return 'Southern Hemisphere'
        }
    }
}

export default { City, Community, url, postData };