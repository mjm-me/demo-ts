//Consultas de tipos (type queries)
// keyof: extrae las claves de un tipo / interface (o clase) en forma de una unión de tipos literales.
{
  type User = {
    name: string;
    age: number;
  };

  type UserKeys = keyof User; // 'name' | 'age'

  //typeof: extrae el tipo de un valor, especialmente útil en el caso de objetos o arrays devueltos en una función, cuando necesito reutilizar el tipo.
  const user = {
    name: 'Pepe',
    age: 30,
  };

  type UserType = typeof user; // { name: string, age: number }

  // Es diferente del operador typeof de JS, que devuelve el tipo de un valor dentro de una expresión.
  const value = 42;
  if (typeof value === 'number') {
  }

  //keyof typeof: combina las dos consultas de tipos anteriores, permitiendo extraer las claves de un objeto a partir de un valor.
  const foo = {
    bar: 'hello',
    baz: 'world',
  };

  type FooKey = keyof typeof foo;

  let fooKey: FooKey = 'bar';
  fooKey = 'baz';
}

{
  //tipos de acceso indexado. A partir de untipo /interfaz se puede acceder a una de sus propiedades mediante el uso de la notación de corchetes, para usarla como tipo
  type User = {
    id: number;
    name: string;
    age: number;
    address: {
      street: string;
      city: string;
    };
  };

  let id: User['id']; // number
  let city: User['address']['city']; // string
  let property: User['age' | 'address']; // number | { street: string; city: string; }
}
