// person.js (or any file you are using)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); 
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

module.exports = { Person, Employee }; // Exporting for use in tests
