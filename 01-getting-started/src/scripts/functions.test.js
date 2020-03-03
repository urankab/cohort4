import functions from './functions'

//TAXES TEST---------------------------------------------
// test('Check that the income tax is working', () => {
//     expect(taxFunc.getTaxAmount(48535)).toBe(41254.75);
//     expect(taxFunc.getTaxAmount(50000)).toBe(42419.425);
// });

//SIZE----------------------------------------------------
test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("extra large");
    expect(functions.size(101)).toBe("extra large");

});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

//Is Even 
test('Is Even test', () => {
    expect(functions.isEven(2)).toBe(true);
    expect(functions.isEven(3)).toBe(false);
});

