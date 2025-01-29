"use strict";
//Programación orientada a objetos
class Car {
    make;
    model;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        console.log(`The car ${this.make} ${this.model} is starting.`);
    }
}
// Creating an object (instance) of the class
const myCar = new Car('Toyota', 'Corolla');
myCar.start(); // Output: The car Toyota Corolla is starting.
//Principios o pilares: 1 - ABSTRACCIÓN
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, I am ${this.name} and I am ${this.age} years old.`;
    }
}
//Principios o pilares: 2 - ENCAPSULACIÓN
class BankAccount {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}
//Tipo Abstracto de Datos
class Stack {
    items = [];
    // Push a new item onto the stack
    push(item) {
        this.items.push(item);
    }
    // Pop the top item from the stack
    pop() {
        return this.items.pop();
    }
    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}
//Principios o pilares: 3 - HERENCIA
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}
//Principios o pilares: 4 - POLIMORFISMO
class Vehicle {
    move() {
        console.log('The vehicle moves.');
    }
}
class Car extends Vehicle {
    move() {
        console.log('The car moves on wheels.');
    }
}
class Boat extends Vehicle {
    move() {
        console.log('The boat sails on water.');
    }
}
const vehicles = [new Car(), new Boat()];
vehicles.forEach((vehicle) => vehicle.move());
{
    /****************************/
    //Creación de objetos
    class Person {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const person1 = new Person('Alice', 30); // Creación de un objeto de tipo 'Person'
    //Llamada a métodos de un objeto
    class Car {
        model;
        constructor(model) {
            this.model = model;
        }
        start() {
            console.log(`${this.model} is starting.`);
        }
    }
    const myCar = new Car('Toyota');
    myCar.start(); // Llamada al método 'start' del objeto 'myCar'
    //Clases abstractas
    class Animal {
        name;
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        makeSound() {
            console.log(`${this.name} barks.`);
        }
    }
    const myDog = new Dog('Rex');
    myDog.makeSound(); // Rex barks.
    // const animal = new Animal("Generic Animal"); // Error: no se puede instanciar una clase abstracta.
    //Tipos de herencia
    class Animal {
        makeSound() {
            console.log('Animal makes a sound.');
        }
    }
    class Dog extends Animal {
        makeSound() {
            console.log('Dog barks.');
        }
    }
    class Puppy extends Dog {
        makeSound() {
            console.log('Puppy yelps.');
        }
    }
    const myPuppy = new Puppy();
    myPuppy.makeSound(); // Puppy yelps.
}
{
    //Polimorfismo de escritura
    class Animal {
        makeSound() {
            console.log('Animal makes a sound.');
        }
    }
    class Dog extends Animal {
        makeSound() {
            console.log('Dog barks.');
        }
    }
    class Cat extends Animal {
        makeSound() {
            console.log('Cat meows.');
        }
    }
    let animal; //aquí solo lo tipo
    animal = new Dog();
    console.log(animal instanceof Dog); //true
    console.log(animal instanceof Animal); //true porque está heredado
    animal.makeSound(); // Dog barks (enlace dinámico)
    animal = new Cat();
    animal.makeSound(); // Cat meows (enlace dinámico)
}
{
    //usar composición en lugar de herencia
    class Engine {
        start() {
            console.log('Engine starts.');
        }
    }
    class Car {
        engine;
        constructor() {
            this.engine = new Engine(); // Composición: Car "tiene un" Engine
        }
        startCar() {
            this.engine.start();
        }
    }
    const myCar = new Car();
    myCar.startCar(); // Engine starts.
}
{
    //Paso de mensajes
    class Car {
        start() {
            console.log('The car is starting.');
        }
    }
    class Driver {
        drive(car) {
            car.start(); // Paso de mensaje: el objeto 'car' recibe el mensaje 'start'
        }
    }
    const myCar = new Car();
    const driver = new Driver();
    driver.drive(myCar); // Output: The car is starting.
}
{
    //Agregación
    class Book {
        title;
        constructor(title) {
            this.title = title;
        }
    }
    class Library {
        books = [];
        addBook(book) {
            this.books.push(book);
        }
    }
    const book1 = new Book('1984');
    const book2 = new Book('To Kill a Mockingbird');
    const library = new Library();
    library.addBook(book1);
    library.addBook(book2);
    // Los libros pueden existir fuera de la biblioteca.
}
{
    //Composición
    class Room {
        name;
        constructor(name) {
            this.name = name;
        }
    }
    class House {
        rooms;
        constructor() {
            this.rooms = [new Room('Living Room'), new Room('Bedroom')];
        }
        displayRooms() {
            this.rooms.forEach((room) => {
                console.log(`This house has a ${room.name}.`);
            });
        }
    }
    const myHouse = new House();
    myHouse.displayRooms();
    // Output:
    // This house has a Living Room.
    // This house has a Bedroom.
}
