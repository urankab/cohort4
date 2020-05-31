const url = 'http://localhost:5000/';

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
            name: "", latitude: '', longitude: '', population: "", key: ""
        }
        const data = { ...defaults, ...obj };
        this.name = data.name;
        this.latitude = data.latitude;
        this.longitude = data.longitude;
        this.population = data.population;
        this.key = data.key;
    }

    newKey() {
        City.lastKey++;
        this.key = City.lastKey;
    }

    async movedIn(num) {
        this.population += Number(num);
        await postData(url + 'update', { population: this.population, key: this.key })
    }

    async movedOut(num) {
        this.population -= Number(num);
        await postData(url + 'update', { population: this.population, key: this.key })
    }

    show() {
        return `${this.name}\nLatitude: ${this.latitude}\nLongitude: ${this.longitude}\nPopulation: ${this.population}\nKey: ${this.key}`;
    }

    howBig() {
        if (this.population === 0) {
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

    whichSphere() {
        if (this.latitude > 0) {
            return 'Northern Hemisphere'
        }
        if (this.latitude === 0) {
            return 'Equater'
        }
        if (this.latitude < 0) {
            return 'Southern Hemisphere'
        }
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
        const data = await postData(url + "all");

        //Create a dictionary of cities and keep track of the last key
        const cities = {};
        data.forEach(x => {
            cities[x.key] = x;
            this.lastKey = (x.key > this.lastKey) ? x.key : this.lastKey;
        });

        this.cities = cities;
    }

    async addOrUpdate(city) {
        let theUrl;

        if (city.key) {
            theUrl = url + 'update'
            // city.population = Number(city.population)
        } else {
            theUrl = url + 'add'
            this.lastKey++;
            city.key = this.lastKey;
            // city.population = Number(city.population)
        }
        await postData(theUrl, city);
        this.cities[city.key] = city;
    }

    async delete(thekey) {
        let theUrl;
        if (thekey) {
            theUrl = url + 'delete'
        }
        await postData(theUrl, { key: Number(thekey) });
    }

    getMostNorthern() {
        let latitudeArray = []
        let theName;
        for (let key in this.cities) {
            latitudeArray.push(this.cities[key].latitude)
        }
        let mostNorthLat = Math.max.apply(null, latitudeArray);
        for (let key in this.cities) {
            if (mostNorthLat === this.cities[key].latitude) {
                theName = this.cities[key].name
            }
        }
        if (this.length() > 0) {
            return `${theName} at ${mostNorthLat}°`
        }
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
}

export default { City, Community, url, postData };