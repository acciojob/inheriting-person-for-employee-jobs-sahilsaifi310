
class Person {
    
    cangreet(name, age) {
        this.name = name;
        this.age = age; 
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}


class Employee extends Person {
    constructor(name, age, jobTitle) {
       
        super(name, age); 
        this.jobTitle = jobTitle;
    }

   
    jobGreet() {
        super.cangreet()
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}


const person = new Person("Alice", 25);
person.cangreet(); 


const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet(); 