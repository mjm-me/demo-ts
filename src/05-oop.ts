//Programación orientada a objetos

class Car {
  make: string;
  model: string;

  constructor(make: string, model: string) {
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
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, I am ${this.name} and I am ${this.age} years old.`;
  }
}

//Principios o pilares: 2 - ENCAPSULACIÓN
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

//Tipo Abstracto de Datos
class Stack<T> {
  private items: T[] = [];

  // Push a new item onto the stack
  public push(item: T): void {
    this.items.push(item);
  }

  // Pop the top item from the stack
  public pop(): T | undefined {
    return this.items.pop();
  }

  // Check if the stack is empty
  public isEmpty(): boolean {
    return this.items.length === 0;
  }
}

//Principios o pilares: 3 - HERENCIA
abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}

//Principios o pilares: 4 - POLIMORFISMO
class Vehicle {
  move(): void {
    console.log('The vehicle moves.');
  }
}

class Car extends Vehicle {
  move(): void {
    console.log('The car moves on wheels.');
  }
}

class Boat extends Vehicle {
  move(): void {
    console.log('The boat sails on water.');
  }
}

const vehicles: Vehicle[] = [new Car(), new Boat()];
vehicles.forEach((vehicle) => vehicle.move());

{
  /****************************/
  //Creación de objetos
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const person1 = new Person('Alice', 30); // Creación de un objeto de tipo 'Person'

  //Llamada a métodos de un objeto
  class Car {
    model: string;

    constructor(model: string) {
      this.model = model;
    }

    start() {
      console.log(`${this.model} is starting.`);
    }
  }

  const myCar = new Car('Toyota');
  myCar.start(); // Llamada al método 'start' del objeto 'myCar'

  //Clases abstractas
  abstract class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    // Método abstracto que debe implementarse en las subclases
    abstract makeSound(): void;
  }

  class Dog extends Animal {
    makeSound(): void {
      console.log(`${this.name} barks.`);
    }
  }

  const myDog = new Dog('Rex');
  myDog.makeSound(); // Rex barks.
  // const animal = new Animal("Generic Animal"); // Error: no se puede instanciar una clase abstracta.

  //Tipos de herencia
  class Animal {
    makeSound(): void {
      console.log('Animal makes a sound.');
    }
  }

  class Dog extends Animal {
    makeSound(): void {
      console.log('Dog barks.');
    }
  }

  class Puppy extends Dog {
    makeSound(): void {
      console.log('Puppy yelps.');
    }
  }

  const myPuppy = new Puppy();
  myPuppy.makeSound(); // Puppy yelps.
}

{
  //Polimorfismo de escritura
  class Animal {
    makeSound(): void {
      console.log('Animal makes a sound.');
    }
  }

  class Dog extends Animal {
    makeSound(): void {
      console.log('Dog barks.');
    }
  }

  class Cat extends Animal {
    makeSound(): void {
      console.log('Cat meows.');
    }
  }

  let animal: Animal; //aquí solo lo tipo
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
    start(): void {
      console.log('Engine starts.');
    }
  }

  class Car {
    engine: Engine;

    constructor() {
      this.engine = new Engine(); // Composición: Car "tiene un" Engine
    }

    startCar(): void {
      this.engine.start();
    }
  }

  const myCar = new Car();
  myCar.startCar(); // Engine starts.
}

{
  //Paso de mensajes
  class Car {
    public start() {
      console.log('The car is starting.');
    }
  }

  class Driver {
    public drive(car: Car) {
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
    title: string;

    constructor(title: string) {
      this.title = title;
    }
  }

  class Library {
    books: Book[] = [];

    addBook(book: Book) {
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
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class House {
    rooms: Room[];

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
