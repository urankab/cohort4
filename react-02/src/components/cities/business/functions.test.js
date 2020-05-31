global.fetch = require('node-fetch');
import funcs from "./functions.js";

test('Test that postData gives a good error if api server not started', async () => {
    try {
        // dummy url:port that does not exist
        const url = 'http://localhost:5678/';
        const data = await funcs.postData(url);
        // The above line should throw an error and we should never get to the next line
        expect("").toBe("This bad port # should have caused an exception.");
    }
    catch (e) {
        expect(e.code).toBe("ECONNREFUSED");
    }
    finally {
    }
});

test('Test getting default values', () => {
    const cityCtrl = new funcs.Community()
    const c1 = cityCtrl.getNewCity()
    expect(c1.name).toBe('');
    expect(c1.latitude).toBe('')
    expect(c1.longitude).toBe('');
    expect(c1.population).toBe('');
    expect(c1.key).toBe('')
})

test('test load People from api', async () => {
    const cityCtrl = new funcs.Community();

    try {
        const url = funcs.url;
        const postData = funcs.postData;

        // clear the server (delete all the data on the server)
        let data = await postData(url + 'clear');

        let city;
        await cityCtrl.loadCities();

        expect(cityCtrl.length()).toBe(0);

        city = cityCtrl.getNewCity();
        city.name = 'Calgary';
        city.latitude = '51.0447';
        city.longitude = '114.0719';
        city.population = 1366000;
        await cityCtrl.addOrUpdate(city);

        await cityCtrl.loadCities();
        expect(cityCtrl.length()).toBe(1);

        //Add another city
        city = cityCtrl.getNewCity();
        city.name = 'Winnipeg';
        await cityCtrl.addOrUpdate(city);

        await cityCtrl.loadCities();
        expect(cityCtrl.length()).toBe(2);

        city = cityCtrl.get('1');
        expect(city.name).toBe('Calgary');
        city = cityCtrl.get('2');
        expect(city.name).toBe('Winnipeg');

        city = cityCtrl.get('1');
        city.name = 'Cowtown';
        city.population = 2;
        await cityCtrl.addOrUpdate(city);

        await cityCtrl.loadCities();
        city = cityCtrl.get('1');
        expect(city.name).toBe('Cowtown');
        city = cityCtrl.get('2');
        expect(city.name).toBe('Winnipeg');

        //Test that last key works
        expect(cityCtrl.lastKey).toBe(2);
        const cityCtrl2 = new funcs.Community();
        await cityCtrl2.loadCities();
        expect(cityCtrl2.lastKey).toBe(2);
    } catch (e) {
        console.log(e);
        expect("").toBe(e.message);
    }
});

test('Test load person instance from city copy', async () => {

    const cityCtrl = new funcs.Community();

    //Clear the server (delete all the data on the server)
    let data = await funcs.postData(funcs.url + 'clear');

    let city;
    city = cityCtrl.getNewCity();
    city.name = "Red Deer";
    // console.log(city);
    const newCity = { ...city };
    // console.log(newCity);

    await cityCtrl.addOrUpdate(newCity);
});

test('Test addOrUpdate updates internal storage', async () => {

    // clear the server (delete all the data on the server)
    let data = await funcs.postData(funcs.url + 'clear');
    funcs.City.lastKey = 0;
    const cityCtrl = new funcs.Community();

    let c1, c2, k1, k2;
    c1 = cityCtrl.getNewCity();
    c1.name = 'Toronto';
    await cityCtrl.addOrUpdate(c1);

    // console.log(cityCtrl.cities);

    c2 = cityCtrl.get('1');
    expect(c2.name).toBe('Toronto');

    c2.name = "TayTay";
    await cityCtrl.addOrUpdate(c2);
    c1 = cityCtrl.get('1');
    expect(c1.name).toBe('TayTay');
});

test('Test show() - show city data', () => {
    const city1 = new funcs.City({
        name: 'Calgary', latitude: '51.0447 N', longitude: '114.0719 W',
        population: 1360000, key: 1
    });
    expect(city1.show()).toBe('Calgary\nLatitude: 51.0447 N\nLongitude: 114.0719 W\n'
        + 'Population: 1360000\nKey: 1');
})

test('Test movedIn() and movedOut() - changes population', async () => {
    const cityCtrl = new funcs.Community();
    let data = await funcs.postData(funcs.url + 'clear');
    await cityCtrl.loadCities()
    expect(cityCtrl.length()).toBe(0)

    let city = cityCtrl.getNewCity();
    city.name = 'Kitty City'
    city.population = 100
    await cityCtrl.addOrUpdate(city)
    expect(city.key).toBe(1)

    await city.movedIn(50);
    await city.movedOut(10);

    city = cityCtrl.get('1');
    expect(city.population).toBe(140);
})

test('Test howBig() - returns size of city', () => {
    let city = new funcs.City({ name: 'City', latitude: 1, longitude: 1, population: 0, key: 1 })
    expect(city.howBig()).toBe('No Population')
    city.movedIn(100);
    expect(city.howBig()).toBe('Hamlet: 1-100')
    city.movedIn(1);
    expect(city.howBig()).toBe('Village: 101-999')
    city.movedIn(899);
    expect(city.howBig()).toBe('Town: 1,000-20,000')
    city.movedIn(19000);
    expect(city.howBig()).toBe('Large Town: 20,000-100,000')
    city.movedIn(80000);
    expect(city.howBig()).toBe('City: 100,000+')
})

test('Test which sphere, most northern, southern and total population', async () => {
    const cityCtrl = new funcs.Community();
    await funcs.postData(funcs.url + 'clear');

    let city1 = cityCtrl.getNewCity()
    city1.name = "Gangster's Paradise"
    city1.latitude = -15
    city1.longitude = 5
    city1.population = 10
    await cityCtrl.addOrUpdate(city1)


    let city2 = cityCtrl.getNewCity()
    city2.name = 'Pho City'
    city2.latitude = 5
    city1.longitude = 52
    city1.population = 1050
    await cityCtrl.addOrUpdate(city2)

    let city3 = cityCtrl.getNewCity()
    city3.name = 'Frisbee Land'
    city3.latitude = 0
    city1.longitude = 12
    city1.population = 1000000
    await cityCtrl.addOrUpdate(city3)

    expect(cityCtrl.length()).toBe(3);
    expect(city1.whichSphere()).toBe('Southern Hemisphere')
    expect(city2.whichSphere()).toBe('Northern Hemisphere')
    expect(city3.whichSphere()).toBe('Equater')
})

test('Test deleting cities', async () => {
    const cityCtrl = new funcs.Community();
    await funcs.postData(funcs.url + 'clear');

    let city1 = cityCtrl.getNewCity()
    city1.name = 'Kitty City'
    await cityCtrl.addOrUpdate(city1)

    let city2 = cityCtrl.getNewCity()
    city2.name = 'Doggy City'
    await cityCtrl.addOrUpdate(city2)

    expect(cityCtrl.length()).toBe(2);

    await cityCtrl.delete(1)

    await cityCtrl.loadCities()
    expect(cityCtrl.length()).toBe(1);
})

test('Test most northern, southern and total population', async () => {
    const cityCtrl = new funcs.Community();
    await funcs.postData(funcs.url + 'clear');

    let city1 = cityCtrl.getNewCity()
    city1.name = "Gangster's Paradise"
    city1.latitude = -15
    city1.longitude = 5
    city1.population = 10
    await cityCtrl.addOrUpdate(city1)


    let city2 = cityCtrl.getNewCity()
    city2.name = 'Pho City'
    city2.latitude = 5
    city2.longitude = 52
    city2.population = 1050
    await cityCtrl.addOrUpdate(city2)

    let city3 = cityCtrl.getNewCity()
    city3.name = 'Frisbee Land'
    city3.latitude = 0
    city3.longitude = 12
    city3.population = 1000000
    await cityCtrl.addOrUpdate(city3)
    expect(cityCtrl.length()).toBe(3);

    expect(cityCtrl.getMostNorthern()).toBe('Pho City at 5°')
    expect(cityCtrl.getMostSouthern()).toBe("Gangster's Paradise at -15°")
    expect(cityCtrl.getTotalPopulation()).toBe(1001060)
})