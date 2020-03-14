class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    birthday() {
        this.age++;
    }

    show() {
        return `${this.name} is ${this.age} old`
    }

}

class Professor extends Person {
    show() {
        return super.show() + ' and teaches';
    }
}

class Farmer extends Person {
    show() {
        return super.show() + ' and farms';
    }
}

const larry = new Farmer("Larry", 29);
const roman = new Professor("Roman", 25);

console.log(larry.show());
larry.birthday();
console.log(larry.show());
console.log(roman.show());

// -- -- -- -- --Output-- -- -- -- --

// Larry is 29 old and farms
// index.js: 37 Larry is 30 old and farms
// index.js: 39 Roman is 25 old and teaches