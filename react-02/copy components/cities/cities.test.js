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
test('Test that the Community methods works', () => {
    const community = new Community();
    community.createCity('Paris', 48.8566, 2.3522, 2148000, 1)
    community.createCity('Test2', 50, 5, 21, 2)
    community.createCity('Test3', -7, 1, 1000, 3)
    community.createCity('Test4', 90, 1, 1000, 4)
    expect(community.createCity('Jello', 90, 1, 100000, 5)).toBe('Created Jello city with key: 5')
    expect(community.cityArray[0].name).toEqual('Paris')
    expect(community.cityArray[1].name).toEqual('Test2')
    expect(community.cityArray[2].name).toEqual('Test3')
    expect(community.cityArray[3].name).toEqual('Test4')
    community.deleteCity(2);
    expect(community.cityArray[0].name).toBe('Paris')
    expect(community.cityArray[1].name).not.toBe('Test2')
    expect(community.cityArray[1].name).toBe('Test3')
    expect(community.whichSphere(community.cityArray[0].key)).toBe('Northern Hemisphere')
    expect(community.whichSphere(4)).toBe('Northern Hemisphere')
    expect(community.whichSphere(3)).toBe('Southern Hemisphere')
    expect(community.getMostNorthern()).toEqual('Most Northern: Test4,90,1,1000,4')
    expect(community.getMostSouthern()).toEqual('Most Southern: Test3,-7,1,1000,3')
    expect(community.getPopulation()).toBe('Total Population: 2250000')
})

//This works because both variables are referencing the same object, = to each other
test('Test myFav = myCity works', () => {
    const myCity = new City('FavCity', 20, 30, 100, 1)
    const myFav = myCity;
    console.log(myCity.population);
    console.log(myFav.population);
    expect(myCity.population).toEqual(myFav.population)

    myCity.movedIn(10)
    console.log(myCity.population);
    console.log(myFav.population);
    expect(myCity.population).toEqual(110)
    expect(myFav.population).toEqual(110)

    myFav.movedIn(20)
    console.log(myCity.population);
    console.log(myFav.population);
    expect(myCity.population).toEqual(130)
    expect(myFav.population).toEqual(130)
})

//---DOM TESTING--------------------------------------

test('Test that createCard() works', () => {
    const com = new Community();
    com.createCity('Test', 1, 1, 1, 1)

    let container = document.createElement('div')
    let newCard = document.createElement('div')
    container.appendChild(newCard)

    newCard.appendChild(com.createCard(com.cityArray[0]))
    newCard.setAttribute('class', 'card')
    newCard.setAttribute('key', com.cityArray[0].key)
    let msg = document.createElement('p')
    newCard.appendChild(msg)

    expect(newCard).toBeTruthy();
    expect(container.children.length).toBe(1)
    expect(container.children[0].getAttribute('class')).toBe('card')
    expect(container.children[0].getAttribute('key')).toBe('1')
    expect(container.children[0].textContent).toContain('Test', '1', 'MovedIn')
    expect(container.children[0].textContent.substr(0, 15)).toBe('TestLatitude: 1')

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
    let deleteBtn = document.createElement('button')

    newCard.appendChild(input)
    newCard.appendChild(movedInBtn)
    newCard.appendChild(movedOutBtn)
    newCard.appendChild(deleteBtn)

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

    movedInBtn.addEventListener('click', () => {
        input.value = 1000;
        com.cityArray[0].movedIn(input.value)
        cityPopText.textContent = `Population: ${com.cityArray[0].population}`;
        howBigText.textContent = com.cityArray[0].howBig()
        n.textContent = com.getMostNorthern();
        s.textContent = com.getMostSouthern();
        p.textContent = com.getPopulation();
    })

    movedOutBtn.addEventListener('click', () => {
        input.value = 2;
        com.cityArray[0].movedOut(input.value)
        cityPopText.textContent = `Population: ${com.cityArray[0].population}`;
        howBigText.textContent = com.cityArray[0].howBig()
        n.textContent = com.getMostNorthern();
        s.textContent = com.getMostSouthern();
        p.textContent = com.getPopulation();
    })

    deleteBtn.addEventListener('click', () => {
        msg.textContent = `Deleted ${com.cityArray[0].name}`
        com.deleteCity(com.cityArray[0].key)
        deleteBtn.parentElement.remove();
        n.textContent = com.getMostNorthern();
        s.textContent = com.getMostSouthern();
        p.textContent = com.getPopulation();
    })

    movedInBtn.click()
    expect(cityPopText.textContent).toBe('Population: 1001')
    expect(howBigText.textContent).toBe('Town: 1,000-20,000')

    movedOutBtn.click()
    expect(cityPopText.textContent).toBe('Population: 999')
    expect(howBigText.textContent).toBe('Village: 101-999')

    n.textContent = com.getMostNorthern();
    s.textContent = com.getMostSouthern();
    p.textContent = com.getPopulation();

    expect(n.textContent).toBe('Most Northern: Test,1,1,999,1')
    expect(s.textContent).toBe('Most Southern: Test,1,1,999,1')
    expect(p.textContent).toBe('Total Population: 999')

    deleteBtn.click()
    expect(msg.textContent).toBe(`Deleted Test`)
    expect(container.children.length).toBe(0)
})