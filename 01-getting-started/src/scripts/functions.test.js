import calcFunctions from './functions'
import functions from './functions'

//Calc tests
test('Check that add function works', () => {
    expect(calcFunctions.add(1,2)).toBe(3);
    expect(calcFunctions.add(101,202)).toBe(303);
});

test('Check that subtract function works', () => {
    expect(calcFunctions.subtract(1,2)).toBe(-1);
    expect(calcFunctions.subtract(5,5)).toBe(0);
});

test('Check that multiply function works', () => {
    expect(calcFunctions.multiply(4,5)).toBe(20);
    expect(calcFunctions.multiply(5,10)).toBe(50);
});

test('Check that divide function works', () => {
    expect(calcFunctions.divide(18,2)).toBe(9);
    expect(calcFunctions.divide(10,2)).toBe(5);
});


// //Size tests
// test('Check the sizes', () => {
//     expect(functions.size(-1)).toBe("small"); // Consider the edge cases
//     expect(functions.size(0)).toBe("small");
//     expect(functions.size(10)).toBe("medium");
//     expect(functions.size(15)).toBe("medium");
//     expect(functions.size(20)).toBe("large");
//     expect(functions.size(2000000)).toBe("extra large");
//     expect(functions.size(101)).toBe("extra large");

// });

// test('Does that add function work?', () => {
//     expect(functions.add(1,2)).toBe(3);
//     expect(functions.add(101,202)).toBe(303);
// });

// //Is Even 
// test('Is Even test', () => {
//     expect(functions.isEven(2)).toBe(true);
//     expect(functions.isEven(3)).toBe(false);
//});

