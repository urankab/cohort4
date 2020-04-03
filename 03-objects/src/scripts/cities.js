class City {
    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {
        return `${this.name}: Latitude: ${this.latitude} Longitude: ${this.longitude} Population: ${this.population}`;
    }

    movedIn(num) {
        this.population += num;
    }

    movedOut(num) {
        this.population -= num;
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
    }
    createCity(name, latitude, longitude, population) {
        this.cityArray.push(new City(name, latitude, longitude, population));
    }

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