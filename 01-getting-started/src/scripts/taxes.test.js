import taxFunc from './taxes.js'

test('Check that the income tax function works', () => {
    expect(taxFunc.getTaxAmount(48535)).toBe(7280.25);
    expect(taxFunc.getTaxAmount(12000)).toBe(1800);
    expect(taxFunc.getTaxAmount(50000)).toBe(7580.57);
    expect(taxFunc.getTaxAmount(60000)).toBe(9630.58);
    expect(taxFunc.getTaxAmount(100000)).toBe(17991.78);
    expect(taxFunc.getTaxAmount(170000)).toBe(36777.59);
    expect(taxFunc.getTaxAmount(300000)).toBe(77902.87);
    expect(taxFunc.getTaxAmount("sdfsd")).toBe("Please enter your income");
});

