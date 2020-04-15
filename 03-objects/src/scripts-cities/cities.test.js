import { City, Community } from "./cities.js";

test('Check the constructor works', () => {
    const city1 = new City('Calgary', 51.0447, 114.0719, 1360000);
    expect(city1.name).toBe('Calgary');
    expect(city1.latitude).toBe(51.0447);
    expect(city1.longitude).toBe(114.0719);
    expect(city1.population).toBe(1360000);
})

test('Check that show() works', () => {
    const city1 = new City('Calgary', 51.0447, 114.0719, 1360000);
    expect(city1.show()).toBe('Calgary: Latitude: 51.0447 Longitude: 114.0719 Population: 1360000');
})

test('Check that movedIn() and movedOut() works ', () => {
    const city1 = new City('Calgary', 51.0447, 114.0719, 1360000);
    city1.movedIn(2000);
    expect(city1.population).toBe(1362000);
    city1.movedOut(1000);
    expect(city1.population).toBe(1361000);
})

test('Check that howBig() works', () => {
    let city2 = new City('City', 1, 1, 0)
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
test('Test AccountController constructor works', () => {
    const community = new Community();
    expect(community.cityArray).toEqual([]);
})

test('Test key generation and getNameFromKey()', () => {
    const com = new Community();
    com.createCity('Test', 1, 5, 100)
    com.createCity('Test2', 10, 10, 10)
    com.createCity('Hugs', 1, 1, 12)

    expect(com.getNameFromKey('k1')).toBe('Test')
    expect(com.getNameFromKey('k2')).toBe('Test2')
    expect(com.getNameFromKey('k3')).toBe('Hugs')

    expect(com.cityArray[0].key).toBe('k1')
    expect(com.cityArray[1].key).toBe('k2')
    expect(com.cityArray[2].key).toBe('k3')
})

test('Test that the Community methods works', () => {
    const community = new Community();
    community.createCity('Paris', 48.8566, 2.3522, 2148000)
    community.createCity('Test2', 50, 5, 21)
    community.createCity('Test3', -7, 1, 1000)
    community.createCity('Test4', 90, 1, 1000)
    expect(community.cityArray[0].name).toEqual('Paris')
    expect(community.cityArray[1].name).toEqual('Test2')
    community.deleteCity('k2');
    expect(community.cityArray[1].name).not.toBe('Test2')
    expect(community.whichSphere(community.cityArray[0].name)).toBe('Northern Hemisphere')
    expect(community.whichSphere('Paris')).toBe('Northern Hemisphere')
    expect(community.whichSphere('Test3')).toBe('Southern Hemisphere')
    expect(community.getMostNorthern()).toEqual('Most Northern: Test4,90,1,1000,k4')
    expect(community.getMostSouthern()).toEqual('Most Southern: Test3,-7,1,1000,k3')
    expect(community.getPopulation()).toBe('Total Population: 2150000')
})

//---DOM TESTING--------------------------------------

test('Test that createCard() works', () => {
    const com = new Community();
    const div = document.createElement('div')
    com.createCity('Test', 1, 1, 1)
    com.createCity('Hey', 1, 1, 1)
    const el = com.createCard(com.cityArray[0])
    const el2 = com.createCard(com.cityArray[1])
    expect(el).toBeTruthy();
    // div.appendChild(el)
    // div.appendChild(el2)
    // expect(div.children.length).toBe(2)
    // expect(div.children[0].getAttribute('class')).toBe('card')
    // expect(div.children[0].textContent).toContain('Test')
    // expect(div.children[1].textContent.substr(0, 15)).toBe('HeyLatitude: 1L')

})