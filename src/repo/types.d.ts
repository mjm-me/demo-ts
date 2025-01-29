type WithId = { id: string };

type Item =  WithId & {name: string;};

interface TypeODM<T extends WithId> {
  read: () => T[];
  readById: (id: T['id']) => T; //¿Errores, qué ocurre si no encuentra el ID => throw Error?
  create: (data: Omit<T, 'id'>) => T;
  updateById: (id: T['id'], data: Omit<Partial<T>, 'id'>) => T;
  deleteById: (id: T['id']) => T;
}

interface Repository<T> {
  read: () => T[];
  readById: (id: string) => T;
  create: (data: Omit<T, 'id'>) => T;
  update: (id: string, data: Partial<T>) => T;
  delete: (id: string) => T;
}


