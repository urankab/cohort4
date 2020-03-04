import taxFunc from './taxes'

test('Check that the income tax function works', () => {
    expect(taxFunc.getIncomeTax(48535)).toBe(41254.75);
    expect(taxFunc.getIncomeTax(12000)).toBe(10200);
    expect(taxFunc.getIncomeTax(50000)).toBe(42419.425);
    expect(taxFunc.getIncomeTax(60000)).toBe(50369.425);
    expect(taxFunc.getIncomeTax(97069)).toBe(79839.28);
    expect(taxFunc.getIncomeTax(98000)).toBe(80528.22);
    expect(taxFunc.getIncomeTax(150000)).toBe(119008.22);
    expect(taxFunc.getIncomeTax(250000)).toBe(188597.13);
    expect(taxFunc.getIncomeTax("sdfsd")).toBe("Please enter your income");
});