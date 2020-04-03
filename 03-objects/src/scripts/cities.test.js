import { City, Community } from "./cities.js";

const city1 = new City('Calgary', '51.0447 N', '114.0719 W', 1360000);

test('Check the constructor works', () => {
    expect(city1.name).toBe('Calgary');
    expect(city1.latitude).toBe('51.0447 N');
    expect(city1.longitude).toBe('114.0719 W');
    expect(city1.population).toBe(1360000);
})

test('Check that show() works', () => {
    expect(city1.show()).toBe('Calgary: Latitude: 51.0447 N Longitude: 114.0719 W Population: 1360000');
})

test('Check that movedIn() and movedOut() works ', () => {
    city1.movedIn(2000);
    expect(city1.population).toBe(1362000);
    city1.movedOut(1000);
    expect(city1.population).toBe(1361000);
})

test('Check that howBig() works', () => {
    let city2 = new City('City', '1', '1', 0)
    expect(city2.howBig()).toBe('No Population')
    city2.movedIn(100);
    expect(city2.howBig()).toBe('Hamlet: 1-100')
    city2.movedIn(1);
    expect(city2.howBig()).toBe('Village: 101-999')
    city2.movedIn(899);
    expect(city2.howBig()).toBe('Town: 1,000-20,000')
    city2.movedIn(19000);
    expect(city2.howBig()).toBe('Large Town: 20,000-100,000')
    city2.movedIn(80000);
    expect(city2.howBig()).toBe('City: 100,000+')
})

//-------- COMMUNITY CLASS ------------------------------
const community = new Community();

test('Test AccountController constructor works', () => {
    expect(community.cityArray).toEqual([]);
})

test('Test that the Community methods works', () => {
    community.createCity('Paris', 48.8566, 2.3522, 2148000)
    community.createCity('Test2', 50, 5, 21)
    community.createCity('Test3', -7, 1, 1000)
    community.createCity('Test4', 90, 1, 1000)
    expect(community.cityArray[0].name).toEqual('Paris')
    expect(community.cityArray[1].name).toEqual('Test2')
    community.deleteCity('Test2');
    expect(community.cityArray).not.toContain('Test2')
        //console.log(community.cityArray)
    expect(community.whichSphere(community.cityArray[0].name)).toBe('Northern Hemisphere')
    expect(community.whichSphere('Paris')).toBe('Northern Hemisphere')
    expect(community.getMostNorthern()).toEqual('Most Northern City: Test4 at 90 latitude')
    expect(community.getMostSouthern()).toBe('Most Southern City: Test3 at -7 latitude')
    expect(community.getPopulation()).toBe('Total Population: 2150000')
})