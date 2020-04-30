import dictionaryFunc from './diction.js'

test('Test that the dictionary lookup function works', () => {
    expect(dictionaryFunc.getProvince("AB")).toBe("Alberta");
    expect(dictionaryFunc.getProvince("BC")).toBe("British Columbia");
});