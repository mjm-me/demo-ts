"use strict";
/*eslint-disable */
// alias de tipos
{
    const user1 = {
        name: 'Pepe',
        age: 23,
    };
    const user2 = {
        name: 'Juan',
        age: 22,
    };
}
// Interfaces
{
    const user1 = {
        name: 'Pepe',
        age: 23,
    };
}
// Solo con alias de tipo -> primitivos
{
    let userName = 'Pepe';
    let sku = 1;
    let processState = 'success';
}
// Solo con interfaces -> Ampliación
{
}
// Uniones / Intersecciones
{
}
{
}
{
    class User {
        name;
        age;
        pets;
        constructor(name, age, pets = []) {
            this.name = name;
            this.age = age;
            this.pets = pets;
        }
    }
    let user1;
    let user2;
    user1 = new User('Pepe', 22);
    // Tipado estructural -> NO ES tipado nominal
    user2 = { name: 'Juan', age: 32 };
    console.log(user1, user2);
    console.log(user1 instanceof User);
    console.log(user2 instanceof User);
}
