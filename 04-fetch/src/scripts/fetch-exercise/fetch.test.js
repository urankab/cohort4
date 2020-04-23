import functions from './fetch'
global.fetch = require('node-fetch');

const data = [
    { "name": "Maricica", "surname": "Ghinea", "gender": "female", "region": "Romania" },
    { "name": "Nishant", "surname": "Bhattarai", "gender": "male", "region": "Nepal" },
    { "name": "Nicuță", "surname": "Lotru", "gender": "male", "region": "Romania" },
    { "name": "Barbara", "surname": "Schneider", "gender": "female", "region": "United States" },
    { "name": "Stanca", "surname": "Grigoriu", "gender": "female", "region": "Romania" },
    { "name": "Bella", "surname": "Musker", "gender": "female", "region": "New Zealand" },
    { "name": "Fabian", "surname": "Dediu", "gender": "male", "region": "Romania" },
    { "name": "Славчо", "surname": "КОСТАДИНОВ", "gender": "male", "region": "Bulgaria" },
    { "name": "Upendra", "surname": "Ranjit", "gender": "male", "region": "Nepal" },
    { "name": "Dumitra", "surname": "Vicovean", "gender": "female", "region": "Romania" }
]

test('Test that get name works', () => {
    expect(functions.getFirstName(data)).toBe("Maricica");
})


test('Test that get all names works', () => {
    expect(functions.getAllFirstNames(data)).toEqual(["Maricica", "Nishant", "Nicuță", "Barbara", "Stanca", "Bella", "Fabian", "Славчо", "Upendra", "Dumitra"]);
})


// const url = 'http://localhost:5000/';

// test('test that the fetch works?', async() => {

//     const clients = [
//         { key: 1, name: "Larry" },
//         { key: 2, name: "Lorraine" },
//     ]

//     // Check that the server is running and clear any data
//     let data = await postData(url + 'clear');

//     data = await postData(url + 'all');
//     expect(data.status).toEqual(200);
//     expect(data.length).toBe(0);

//     data = await postData(url + 'add', clients[0]);
//     expect(data.status).toEqual(200);

//     data = await postData(url + 'all');
//     expect(data.status).toEqual(200);
//     expect(data.length).toBe(1);
//     expect(data[0].name).toBe("Larry");

//     // add a second with the same key which should be an error
//     data = await postData(url + 'add', clients[0]);
//     expect(data.status).toEqual(400);

//     // add a second which should be ok
//     data = await postData(url + 'add', clients[1]);
//     expect(data.status).toEqual(200);

//     data = await postData(url + 'all');
//     expect(data.status).toEqual(200);
//     expect(data.length).toBe(2);
//     expect(data[1].name).toBe("Lorraine");

//     data = await postData(url + 'read', { key: 1 });
//     expect(data.status).toEqual(200);
//     expect(data.length).toBe(1);
//     expect(data[0].name).toBe("Larry");

//     data = await postData(url + 'update', { key: 1, name: "George" });
//     expect(data.status).toEqual(200);

//     data = await postData(url + 'read', { key: 1 });
//     expect(data.status).toEqual(200);
//     expect(data.length).toBe(1);
//     expect(data[0].name).toBe("George");

//     data = await postData(url + 'delete', { key: 1 });
//     expect(data.status).toEqual(200);

//     data = await postData(url + 'read', { key: 1 });
//     expect(data.status).toEqual(400);
// });