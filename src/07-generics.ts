/*eslint-disable */

{

    type User{
         name: 'Pepe',
         age: 22
    }
  function identity<T>(value: T): T[] {
    return [value];
  }

  let foo = 'Hola mundo';
  console.log(identity(foo));
  let n = 22;
  let r = identity(n);
  console.log(r);
  identity<User>({ name: 'Pepe', age: 22 });
}

{
  class Box<T> {
    content: T;
  }
}
