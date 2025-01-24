/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// Inferencia de tipos

// Declaración const / let
let x = 22;
// x = 'Pepe' // Error de TS

// Tipo inferido es any
let z;
z = 22;
z = 'Pepe';

// let vs. const: const y tipos literales
{
  const x = 'Pepe';
  // x = 'Juan'; ERROR DE JS
}

// let y

// conversión / aserción de tipos. Como sé que mi código tiene un H1 digo que as HTML....
{
  function foo() {
    const z1 = document.querySelector('h1') as HTMLHeadingElement;
    const z2 = document.querySelector('h1') as unknown as number; //cuidado con decirle que se olvide de ello y se cambie a number

    z1.addEventListener('click', (event) => {
      const element = event.target as HTMLButtonElement;
      element.disabled = false;
    });
  }
}

// Anotación de tipo --> : tipo
{
  let z: number;
  z = 22;
  // z = 'Pepe'; Error de TS
}

// Declaración const / let NO SE ANOTA
{
  let x: number = 22; // SOBRA number
}

// Anotamos los parámetros

function add(a: number, b: number): number {
  return a + b;
}

const s = (a: number, b: number): number => a - b;

// Objetos Arrays y Tuplas

const user: {
  name: string;
  age: number;
  job?: string;
} = {
  name: 'Pepe',
  age: 22,
};

user.job = 'developer';
delete user.job; //borra la propiedad

if (user.job) {
  console.log(`Trabajo de ${user.job}`);
} else {
  console.log(`Ahora no trabajo`);
}

const foo = (a: string) => {
  console.log(a);
};
foo('a'); 
