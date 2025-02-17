class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); 
        this.jobTitle = jobTitle;
    }

    greet() {
        super.greet(); 
        console.log(`My job title is ${this.jobTitle}`);
    }
}


let obj2 = new Employee("Bob", 30, "Manager");
obj2.greet();

