import functions from './daily.js'

test('Check that convert temp function works', () => {
    expect(daily.convertTemp()).toBe(true);
    //expect(daily.convertTemp(0)).toBe(32);
});