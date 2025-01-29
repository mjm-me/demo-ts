"use strict";
/*eslint-disable */
class User {
    static usersNumber = 0;
    static countUsers() {
        User.usersNumber++;
    }
    static {
        console.log('Load class USER');
    }
    #name;
    _age;
    pets;
    constructor(name, age, pets = []) {
        this.#name = name;
        this._age = age;
        this.pets = pets;
        User.countUsers();
    }
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
    greet() {
        console.log(`Hola, soy ${this.#name} y tengo ${this._age} años`);
    }
    grow() {
        this._age++;
    }
}
const user1 = new User('Pepe', 22, ['Rufo']);
const user2 = new User('Juan', 24);
console.log(user1, user2);
console.log(user1, user2);
user1.grow();
user1.greet();
user2.greet();
console.log(User.usersNumber);
// user1.name = 'Jose';
// console.log(user1.name);
// Clase define factura (Invoice)
// Numero de factura
// Concepto
// Numero
// precio unidad
// print: La factura:
//  - Su numero
//  - El concepto X número --- precio
//  - Total + IVA
// Propiedades de parámetros
{
    class User {
        _name;
        _age;
        pets;
        static usersNumber = 0;
        static countUsers() {
            User.usersNumber++;
        }
        static {
            console.log('Load class USER');
        }
        // private _name: string;
        // private _age: number;
        // public pets?: string[];
        constructor(_name, _age, pets = []) {
            this._name = _name;
            this._age = _age;
            this.pets = pets;
            // this._name = name;
            // this._age = age;
            // this.pets = pets;
            User.countUsers();
        }
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
        greet() {
            console.log(`Hola, soy ${this._name} y tengo ${this._age} años`);
        }
        grow() {
            this._age++;
        }
    }
    const u = new User('Luisa', 63);
}
{
    class Person {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            return `Hola, soy ${this.name} y tengo ${this.age} años`;
        }
    }
    class Employee extends Person {
        salary;
        constructor(name, age, salary) {
            super(name, age);
            this.salary = salary;
        }
        greet() {
            return `${super.greet()} y cobro ${this.salary}€`;
        }
    }
}
{
    const u = {
        account: '',
        createAccount: function () {
            return '';
        },
    };
    class Person {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        eat() {
            return 'Estoy comiendo';
        }
    }
    class Employee extends Person {
        salary;
        account = '';
        constructor(name, age, salary) {
            super(name, age);
            this.salary = salary;
        }
        createAccount() {
            return '';
        }
        greet() {
            return `Hola, soy ${this.name} y tengo ${this.age} años y cobro ${this.salary}€`;
        }
        eat() {
            return super.eat() + ' ......';
        }
    }
    const e1 = new Employee('Pepe', 34, 40_000);
    console.log(e1.eat());
    console.log(e1.greet());
}
{
    class RepoNotesSQL {
        read() {
            return [];
        }
        readById(id) {
            return {};
        }
        create(data) {
            return {};
        }
        update(id, data) {
            return {};
        }
        delete(id) {
            return {};
        }
        generateSQL() {
            return '';
        }
    }
    class RepoNotesMongo {
        read() {
            return [];
        }
        readById(id) {
            return {};
        }
        create(data) {
            return {};
        }
        update(id, data) {
            return {};
        }
        delete(id) {
            return {};
        }
    }
    const repo = new RepoNotesMongo();
    repo.read();
    repo.generateSQL();
}
// Interfaz/type como tipo de data
{
    function foo(param) {
        console.log(param.name, param.age);
    }
    const u = { name: 'Pepe', age: 23, c: 9 };
    // foo({ name: 'Pepe', age: 23, c: 9 });
    foo(u);
}
// Interfaz/type como implements
{
    class User {
        name;
        age;
        address;
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
    }
    const p = new User('Pepe', 23, 'Calle Falsa 123');
    p.address;
}
{
    class Animal {
        makeSound() {
            console.log('Animal makes a sound.');
        }
    }
    class Dog extends Animal {
        makeSound() {
            console.log('Dog barks.');
        }
        eat() { }
    }
    class Cat extends Animal {
        makeSound() {
            console.log('Cat meows.');
        }
    }
    let animal;
    animal = new Dog();
    console.log(animal instanceof Dog); // true
    console.log(animal instanceof Animal); // true
    animal.makeSound(); // Dog barks (enlace dinámico)
    animal.eat();
    animal = new Cat();
    animal.makeSound(); // Cat meows (enlace dinámico)
}
