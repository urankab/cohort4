import functions from './functions'

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

//Is Even 
test('Is Even test', () => {
    expect(functions.isEven(2)).toBe(true);
    expect(functions.isEven(3)).toBe(false);
});