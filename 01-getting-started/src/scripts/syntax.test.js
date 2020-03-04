import syntax from './syntax'

test('NUM: Multiply input by itself', () => {
    expect(syntax.getMultiply(3)).toBe(9);
    expect(syntax.getMultiply(2)).toBe(4);
});

test('STRING: Return string in all caps', () => {
    expect(syntax.getBigCase('wow')).toBe('WOW');
    expect(syntax.getBigCase('hello')).toBe('HELLO');
});

test('BOOLEAN/IF ELSE: Return if string is dog or not', () => {
    expect(syntax.isDog('cat')).toBe(false);
    expect(syntax.isDog('dog')).toBe(true);
});

test('UNDEFINED: Test that all inputs declared as undefined', () => {
    expect(syntax.isUndefined('Hi')).toBeUndefined;
    expect(syntax.isUndefined(123)).toBeUndefined;
});

test('PUSH, SHIFT: Test if Array has added "ant" and "dog", and removed "rabbit"', () => {
    expect(syntax.pushandShift(['rabbit', 'bird', 'worm'],'ant')).toContain('ant');
    expect(syntax.pushandShift(['rabbit', 'bird', 'worm'])).not.toContain('rabbit');
});

test('UNSHIFT: Add "dog" to front of the list', () => {
    expect(syntax.addtoFront(['rabbit', 'bird', 'worm'],'dog')).toContain('dog');
    expect(syntax.addtoFront(['rabbit', 'bird', 'worm'],'dog')).toEqual(['dog','rabbit', 'bird', 'worm']);
});

test('OBJECT: Input name of object and returns its property.', () => {
    expect(syntax.checkObject({"num": 1}, "num")).toEqual(1);
    expect(syntax.checkObject({"num": 1, "word": "hi"}, "word")).toEqual("hi");
    expect(syntax.checkObject({"one": 1, "two": 2, "three": 3},"four")).toBeUndefined;
});

test('KEY LOOKUP: Return an item from an object', () => {
    expect(syntax.keylookUp({"meat": "pork"},"meat")).toBe("pork");
    expect(syntax.keylookUp({"meat": "pork, beef"},"meat")).toBe("pork, beef");
});

test('WHILE: For input is greater than 1 & less than 10, double the input', () => {
    expect(syntax.doubleNum(1)).toBe(2);
    expect(syntax.doubleNum(2)).toBe(4);
    expect(syntax.doubleNum(3)).toBe(6);
});

test('DO WHILE: While input is less than 20, double the input', () => {
    expect(syntax.divideNum(10)).toBe(5);
    expect(syntax.divideNum(18)).toBe(9);
    expect(syntax.divideNum(6)).toBe(3);
});

test('FOR EACH: Capitalize all items in array', () => {
    expect(syntax.arrayCaps(['hey', 'hi'])).toEqual(['HEY','HI']);
    expect(syntax.arrayCaps(['hey', 'hi','heeeeey'])).toEqual(['HEY','HI','HEEEEEY']);
});

test('FOR EACH: Add input to the end of each item in array', () => {
    expect(syntax.changeArray(['hi','hello'],'!')).toEqual(['hi!','hello!']);
    expect(syntax.changeArray(['hi','hello'],'!')).not.toEqual(['hi','hello']);
});

test('FOR IN: If the array contains number 1, turn it to 1010 and then return', () => {
    expect(syntax.addProps([1,2,3,4])).toEqual([1010,2,3,4]);
    expect(syntax.addProps([23,1,41,1])).toEqual([23,1010,41,1010]);
});

test('FOR IN: Add 5 to the first number in the array', () => {
    expect(syntax.forIn([10,20,30,40])).toEqual(15);
});



