class User {
  static usersNumber = 0;
  static countUsers() {
    User.usersNumber++;
  }
  static {
    console.log('Load class USER');
  }

  #name;
  #age;
  #address;

  constructor(name: string, age: number, address: string) {
    this.#name = name;
    this.#age = age;
    this.#address = address;
    User.countUsers();
  }

  // get name() {
  //     return this.#name;
  // }

  // set name(name) {
  //     this.#name = name;
  // }

  greet() {
    console.log(
      `Hola, soy ${this.#name}, tengo ${this.#age} años y vivo en ${this.#address}`,
    );
  }

  grow() {
    this.#age++;
  }
}

const user1 = new User('Pepe', 22, 'Madrid');
const user2 = new User('Juan', 24, 'Albacete');

console.log(user1, user2);
//user1.address = 'Soria';
// // user1.#name = 'Jose';
// // delete user1.#name;
console.log(user1, user2);

user1.grow();
user1.greet();
user2.greet();

console.log(User.usersNumber);

/************ FACTURA/INVOICE *************/

// Numero de factura
// Concepto
// Numero
// precio unidad
// print: La factura:
//  - Su numero
//  - El concepto X número --- precio
//  - Total + IVA

class Company {
  #nif: string;
  #name: string;

  constructor(nif: string, name: string) {
    this.#nif = nif;
    this.#name = name;
  }

  get nif() {
    return this.#nif.toUpperCase();
  }
  get name() {
    return this.#name;
  }
}

export class Product {
  skud: string;
  name: string;
  unityPrice: number;

  constructor(skud: string, name: string, unityPrice: number) {
    this.skud = skud;
    this.name = name;
    this.unityPrice = unityPrice;
  }
}

export class Invoice {
  // propiedades y métodos static
  static #brand = new Company('68323392y', 'Boracay');
  static #lastId = 0;
  static #getID() {
    const year = new Date().getFullYear();
    const id = String(year) + '/' + String(++this.#lastId);
    return id;
  }

  // declaración de propiedades preferiblemente privadas
  #id = Invoice.#getID();
  #client: Company;
  #product: Product;
  #amount: number;
  #iva: number;

  // constructor
  constructor(
    client: Company,
    product: Product,
    amount: number,
    iva: number = 1.21,
  ) {
    this.#product = product;
    this.#amount = amount;
    this.#iva = iva;
    this.#client = client;
  }
  get client() {
    return this.#client;
  }

  #calculatePrice() {
    return this.#amount * this.#product.unityPrice;
  }

  printInvoice() {
    const price = this.#calculatePrice();
    const total = price * this.#iva;

    const invoice = `
        ${Invoice.#brand.name}
        Nif: ${Invoice.#brand.nif}

        Datos cliente
        Nombre: ${this.#client.name}
        Nif: ${this.#client.nif}

        Factura ${this.#id}
        ${this.#product.name} + ${this.#amount} unidades a ${
          this.#product.unityPrice
        }€ 
        Total.................. ${price}€
        ----------------------------------------------
        Total + IVA ........... ${total}
        `;
    console.log(invoice);
  }
}

const client1 = new Company('5656565843D', 'Acme');
const apples = new Product('123', 'apples', 4);
const invoice1 = new Invoice(client1, apples, 20, 1.04);

const client2 = new Company('5656565843D', 'CAS');
const mobile = new Product('456', 'mobile', 500);
const invoice2 = new Invoice(client2, mobile, 1, 1.04);

const invoice3 = new Invoice(invoice2.client, mobile, 1, 1.04);

console.log(invoice1, invoice2);
invoice1.printInvoice();
invoice2.printInvoice();
invoice3.printInvoice();

// Relaciones entre clases
// Agregación / Composición v. Asociación
// Herencia

// Añadimos
// - la empresa (NIF - nombre)
// - el cliente (NIF - nombre)

// - Diversos conceptos --> Array
// - Se refleja todo a imprimir la factura

// - La posibilidad de añadirlos mediante un método
