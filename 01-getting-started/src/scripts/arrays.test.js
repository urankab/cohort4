import arraysFunc from './arrays.js'

test('Check that the arrays functions works', () => {
    expect(arraysFunc.addItem(5)).toBe(5+" has been added");
    expect(arraysFunc.showArray([1,2,3,4])).toEqual("1, 2, 3, 4");
    expect(arraysFunc.totalOfArray([1,2,3,4])).toEqual(10);
    expect(arraysFunc.totalOfArray([10,20])).toEqual(30);
    expect(arraysFunc.clearArray([1,2,3,4])).toEqual([]);
});