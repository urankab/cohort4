import arraysFunc from './arrays.js'

test('Check that the arrays functions works', () => {
    expect(arraysFunc.addItem(5)).toBe(5+" has been added");
    expect(arraysFunc.addItem(3)).toBe(3+" has been added");
    expect(arraysFunc.addItem(2)).toBe(2+" has been added");
    expect(arraysFunc.showArray()).toEqual("5, 3, 2");
    expect(arraysFunc.totalOfArray()).toEqual(10);
    expect(arraysFunc.clearArray()).toEqual([]);
});

