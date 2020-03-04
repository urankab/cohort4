import calculatorFunc from './calculator.js';

test('Check that the calculator functions works', () => {
    expect(calculatorFunc.add(1,2)).toBe(3);
    expect(calculatorFunc.add(101,202)).toBe(303);
    expect(calculatorFunc.subtract(1,2)).toBe(-1);
    expect(calculatorFunc.subtract(5,5)).toBe(0);
    expect(calculatorFunc.multiply(4,5)).toBe(20);
    expect(calculatorFunc.multiply(5,10)).toBe(50);
    expect(calculatorFunc.multiply(4,5)).toBe(20);
    expect(calculatorFunc.multiply(5,10)).toBe(50);
    expect(calculatorFunc.divide(18,2)).toBe(9);
    expect(calculatorFunc.divide(10,2)).toBe(5);
    expect(calculatorFunc.empty()).toBe("Please enter some values");
});
