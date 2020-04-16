import { City, Community } from "./cities.js";

test('Check the City constructor works', () => {
    const city1 = new City('Calgary', 51.0447, 114.0719, 1360000, 'k1');
    expect(city1.name).toBe('Calgary');
    expect(city1.latitude).toBe(51.0447);
    expect(city1.longitude).toBe(114.0719);
    expect(city1.population).toBe(1360000);
    expect(city1.key).toBe('k1')
})

test('Check that show() works - show data', () => {
    const city1 = new City('Calgary', 51.0447, 114.0719, 1360000, 'k1');
    expect(city1.show()).toBe('Calgary: Latitude: 51.0447 Longitude: 114.0719 Population: 1360000 Key: k1');
})

test('Check that movedIn() and movedOut() works - changes population', () => {
    const city1 = new City('Calgary', 51.0447, 114.0719, 1360000, 'k1');
    city1.movedIn(2000);
    expect(city1.population).toBe(1362000);
    city1.movedOut(1000);
    expect(city1.population).toBe(1361000);
})

test('Check that showPop() works - show population', () => {
    const city1 = new City('Calgary', 51.0447, 114.0719, 1360000, 'k1');
    expect(city1.showPop()).toBe(1360000)
})

test('Check that howBig() works', () => {
    let city2 = new City('City', 1, 1, 0, 'k1')
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
    const com = new Community();
    expect(com.cityArray).toEqual([]);
    expect(com.counter).toEqual(1);
})

test('Test that the Community methods works', () => {
    const community = new Community();
    community.createCity('Paris', 48.8566, 2.3522, 2148000)
    community.createCity('Test2', 50, 5, 21)
    community.createCity('Test3', -7, 1, 1000)
    community.createCity('Test4', 90, 1, 1000)
    expect(community.createCity('Jello', 90, 1, 100000)).toBe('Created Jello city with key: k5')
    expect(community.cityArray[0].name).toEqual('Paris')
    expect(community.cityArray[1].name).toEqual('Test2')
    expect(community.cityArray[2].name).toEqual('Test3')
    expect(community.cityArray[3].name).toEqual('Test4')
    community.deleteCity('k2');
    expect(community.cityArray[0].name).toBe('Paris')
    expect(community.cityArray[1].name).not.toBe('Test2')
    expect(community.cityArray[1].name).toBe('Test3')
    expect(community.whichSphere(community.cityArray[0].key)).toBe('Northern Hemisphere')
    expect(community.whichSphere('k4')).toBe('Northern Hemisphere')
    expect(community.whichSphere('k3')).toBe('Southern Hemisphere')
    expect(community.getMostNorthern()).toEqual('Most Northern: Test4,90,1,1000,k4')
    expect(community.getMostSouthern()).toEqual('Most Southern: Test3,-7,1,1000,k3')
    expect(community.getPopulation()).toBe('Total Population: 2250000')
})

test('Test key generation, getNameFromKey(), getObjectFromKey()', () => {
    const com = new Community();
    com.createCity('Test', 1, 5, 100)
    com.createCity('Test2', 10, 10, 10)
    com.createCity('Hugs', 1, 1, 12)

    expect(com.getNameFromKey('k1')).toBe('Test')
    expect(com.getNameFromKey('k2')).toBe('Test2')
    expect(com.getNameFromKey('k3')).toBe('Hugs')

    expect(com.getObjectFromKey('k1')).toEqual({ "key": "k1", "latitude": 1, "longitude": 5, "name": "Test", "population": 100 })
    expect(com.getObjectFromKey('k2')).toEqual({ "key": "k2", "latitude": 10, "longitude": 10, "name": "Test2", "population": 10 })
    expect(com.getObjectFromKey('k3')).toEqual({ "key": "k3", "latitude": 1, "longitude": 1, "name": "Hugs", "population": 12 })

    expect(com.cityArray[0].key).toBe('k1')
    expect(com.cityArray[1].key).toBe('k2')
    expect(com.cityArray[2].key).toBe('k3')
})

//---DOM TESTING--------------------------------------

test('Test that createCard() works', () => {
    const com = new Community();
    com.createCity('Test', 1, 1, 1)

    let container = document.createElement('div')
    let newCard = document.createElement('div')
    container.appendChild(newCard)

    newCard.appendChild(com.createCard(com.cityArray[0]))
    newCard.setAttribute('class', 'card')

    expect(newCard).toBeTruthy();

    expect(container.children.length).toBe(1)
    expect(container.children[0].getAttribute('class')).toBe('card')
    expect(container.children[0].textContent).toContain('Test', 'k1', 'MovedIn')
    expect(container.children[0].textContent.substr(0, 15)).toBe('Testk1Latitude:')

    let cityPopText = document.createElement('p')
    newCard.append(cityPopText)
    cityPopText.textContent = `Population: ${com.cityArray[0].population}`;
    expect(cityPopText.textContent).toBe('Population: 1')

    let howBigText = document.createElement('p')
    newCard.append(howBigText)
    howBigText.textContent = com.cityArray[0].howBig();
    expect(howBigText.textContent).toBe('Hamlet: 1-100')

    let sphereText = document.createElement('p')
    newCard.append(sphereText)
    sphereText.textContent = com.whichSphere(com.cityArray[0].key);
    expect(sphereText.textContent).toBe('Northern Hemisphere')

    let input = document.createElement('text')
    let movedOutBtn = document.createElement('button')
    let movedInBtn = document.createElement('button')
    newCard.appendChild(input)
    newCard.appendChild(movedInBtn)
    newCard.appendChild(movedOutBtn)

    input.value = 5;

    //movedInBtn.addEventListener('click', () => {
    com.cityArray[0].movedIn(input.value)
    cityPopText.textContent = `Population: ${com.cityArray[0].population}`;
    //})

    //expect(movedInBtn.onclick).toBe(expect(cityPopText.textContent).toBe('Population: 6'))
    expect(cityPopText.textContent).toBe('Population: 6')

    let dataDiv = document.createElement('div')
    let n = document.createElement('p')
    let s = document.createElement('p')
    let p = document.createElement('p')

    dataDiv.appendChild(n)
    dataDiv.appendChild(s)
    dataDiv.appendChild(p)

    n.setAttribute('id', 'mostNorthP')
    s.setAttribute('id', 'mostSouthP')
    p.setAttribute('id', 'totalPP')

    n.textContent = com.getMostNorthern();
    s.textContent = com.getMostSouthern();
    p.textContent = com.getPopulation();

    expect(n.textContent).toBe('Most Northern: Test,1,1,1,k1')
    expect(s.textContent).toBe('Most Southern: Test,1,1,1,k1')
    expect(p.textContent).toBe('Total Population: 1')
})