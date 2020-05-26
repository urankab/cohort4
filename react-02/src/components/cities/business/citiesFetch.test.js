global.fetch = require('node-fetch');
import functions from './citiesFetch.js'
import { City, Community } from "./cities.js";

const url = 'http://127.0.0.1:5000/';

test('test that the fetch works?', async() => {
    const com = new Community()
    const cities = [
        { "name": "Calgary", "latitude": 51.05, "longitude": -114.05, 'population': 100, "key": 1 },
        { "name": "Edmonton", "latitude": 53.55, "longitude": -113.49, 'population': 150, "key": 2 },
        { "name": "Red Deer", "latitude": 52.28, "longitude": -113.81, 'population': 3000, "key": 3 }
    ]

    // Check that the server is running and clear any data
    let data = await functions.postData(url + 'clear');

    data = await functions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await functions.postData(url + 'add', cities[0]);
    expect(data.status).toEqual(200);

    data = await functions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Calgary");

    // add a second with the same key which should be an error
    data = await functions.postData(url + 'add', cities[0]);
    expect(data.status).toEqual(400);

    // add a second which should be ok
    data = await functions.postData(url + 'add', cities[1]);
    expect(data.status).toEqual(200);

    data = await functions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);
    expect(data[1].name).toBe("Edmonton");

    data = await functions.postData(url + 'read', { key: 1 });
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Calgary");

    data = await functions.postData(url + 'update', { key: 1, name: "Regina" });
    expect(data.status).toEqual(200);

    data = await functions.postData(url + 'read', { key: 1 });
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Regina");

    data = await functions.postData(url + 'delete', { key: 1 });
    expect(data.status).toEqual(200);

    data = await functions.postData(url + 'read', { key: 1 });
    expect(data.status).toEqual(400);
    data = await functions.postData(url + 'all');
    expect(data[0].name).toBe("Edmonton");
    expect(data[0].key).toBe(2);
    expect(data[0].latitude).toBe(53.55);
    expect(data[0].longitude).toBe(-113.49);
    expect(data[0].population).toBe(150);
    //Add Edmonton to array so we can work with it further
    com.createCity(data[0].name, data[0].latitude, data[0].longitude, data[0].population, data[0].key);

    //ADDING ANOTHER CITY
    com.createCity('Calgary', 12, 1, 1000, 1)
    expect(com.cityArray[1].name).toBe('Calgary')

    data = await functions.postData(url + 'add', { name: com.cityArray[1].name, latitude: com.cityArray[1].latitude, longitude: com.cityArray[1].longitude, population: com.cityArray[1].population, key: com.cityArray[1].key })
    expect(data.status).toEqual(200);
    data = await functions.postData(url + 'all')
    expect(data[1].name).toBe('Calgary')
    expect(data[1].key).toBe(1)

    let container = document.createElement('div')
    let newCard = document.createElement('div')
    container.appendChild(newCard)

    newCard.appendChild(com.createCard(com.cityArray[1]))
    newCard.setAttribute('class', 'card')
    newCard.setAttribute('key', com.cityArray[1].key)
    let msg = document.createElement('p')
    newCard.appendChild(msg)

    expect(newCard).toBeTruthy();
    expect(container.children.length).toBe(1)
    expect(container.children[0].getAttribute('class')).toBe('card')
    expect(container.children[0].getAttribute('key')).toBe('1')

    let cityPopText = document.createElement('p')
    newCard.append(cityPopText)
    cityPopText.textContent = `Population: ${com.cityArray[1].population}`;
    expect(cityPopText.textContent).toBe('Population: 1000')

    let howBigText = document.createElement('p')
    newCard.append(howBigText)
    howBigText.textContent = com.cityArray[1].howBig();
    expect(howBigText.textContent).toBe('Town: 1,000-20,000')

    let sphereText = document.createElement('p')
    newCard.append(sphereText)
    sphereText.textContent = com.whichSphere(com.cityArray[1].key);
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

    com.cityArray[1].movedIn(1000)
    data = await functions.postData(url + 'update', { name: com.cityArray[1].name, latitude: com.cityArray[1].latitude, longitude: com.cityArray[1].longitude, population: com.cityArray[1].population, key: com.cityArray[1].key })
    cityPopText.textContent = `Population: ${com.cityArray[1].population}`;
    howBigText.textContent = com.cityArray[1].howBig()
    n.textContent = com.getMostNorthern();
    s.textContent = com.getMostSouthern();
    p.textContent = com.getPopulation();

    data = await functions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data[1].population).toBe(2000);
    expect(cityPopText.textContent).toBe('Population: 2000')
    expect(howBigText.textContent).toBe('Town: 1,000-20,000')

    com.cityArray[1].movedOut(1001)
    data = await functions.postData(url + 'update', { name: com.cityArray[1].name, latitude: com.cityArray[1].latitude, longitude: com.cityArray[1].longitude, population: com.cityArray[1].population, key: com.cityArray[1].key })
    cityPopText.textContent = `Population: ${com.cityArray[1].population}`;
    howBigText.textContent = com.cityArray[1].howBig()
    n.textContent = com.getMostNorthern();
    s.textContent = com.getMostSouthern();
    p.textContent = com.getPopulation();

    data = await functions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data[1].population).toBe(999);
    expect(cityPopText.textContent).toBe('Population: 999')
    expect(howBigText.textContent).toBe('Village: 101-999')


    deleteBtn.addEventListener('click', async() => {
        msg.textContent = `Deleted ${com.cityArray[1].name}`
        data = await functions.postData(url + 'delete', { name: com.cityArray[1].name, latitude: com.cityArray[1].latitude, longitude: com.cityArray[1].longitude, population: com.cityArray[1].population, key: com.cityArray[1].key })
        expect(data.status).toEqual(200);
        com.deleteCity(com.cityArray[1].key)
        deleteBtn.parentElement.remove();
        n.textContent = com.getMostNorthern();
        s.textContent = com.getMostSouthern();
        p.textContent = com.getPopulation();
    })

    n.textContent = com.getMostNorthern();
    s.textContent = com.getMostSouthern();
    p.textContent = com.getPopulation();

    expect(n.textContent).toBe('Most Northern: Edmonton,53.55,-113.49,150,2')
    expect(s.textContent).toBe('Most Southern: Calgary,12,1,999,1')
    expect(p.textContent).toBe('Total Population: 1149')

    deleteBtn.click()
    data = await functions.postData(url + 'all');
    expect(msg.textContent).toBe(`Deleted Calgary`)
    expect(data.length).toEqual(1)
})