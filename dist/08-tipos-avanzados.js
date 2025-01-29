"use strict";
//Consultas de tipos (type queries)
// keyof: extrae las claves de un tipo / interface (o clase) en forma de una unión de tipos literales.
{
    //typeof: extrae el tipo de un valor, especialmente útil en el caso de objetos o arrays devueltos en una función, cuando necesito reutilizar el tipo.
    const user = {
        name: 'Pepe',
        age: 30,
    };
    // Es diferente del operador typeof de JS, que devuelve el tipo de un valor dentro de una expresión.
    const value = 42;
    if (typeof value === 'number') {
    }
    //keyof typeof: combina las dos consultas de tipos anteriores, permitiendo extraer las claves de un objeto a partir de un valor.
    const foo = {
        bar: 'hello',
        baz: 'world',
    };
    let fooKey = 'bar';
    fooKey = 'baz';
}
{
    let id; // number
    let city; // string
    let property; // number | { street: string; city: string; }
}
