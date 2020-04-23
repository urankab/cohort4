global.fetch = require('node-fetch');
import functions from './citiesFetch.js'
import { City, Community } from "./cities.js";

const url = 'http://127.0.0.1:5000/';

test('test that the fetch works?', async() => {
    const cities = [
        { "key": 1, "name": "Calgary", "lat": 51.05, "long": -114.05 },
        { "key": 2, "name": "Edmonton", "lat": 53.55, "long": -113.49 },
        { "key": 3, "name": "Red Deer", "lat": 52.28, "long": -113.81 }
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
});