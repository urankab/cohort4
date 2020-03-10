import functions from './daily.js'

test('Check that convert temp function works', () => {
    expect(functions.convertToFahrenheit(60)).toBe(140);
    expect(functions.convertToFahrenheit(0)).toBe(32);
});