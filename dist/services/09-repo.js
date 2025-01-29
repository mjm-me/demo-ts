"use strict";
/*eslint-disable */
// Planteamiento inicial (sin generics)
// Defino unos tipos Item y PartialItem
// Creo una interfaz Repository con los métodos CRUD
// Creo dos clases que implementan la interfaz Repository
// Creo una instancia de una de las clases
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
}
// Generalización gracias al uso de generics
// Ahora la interfaz Repository es genérica
// Las clases RepoNotesSQL y RepoNotesMongo implementan la interface genérica
// Asignándole a T el tipo Note
// Usamos la utilidad Partial para definir el tipo Partial<T>
// En la implementación de los métodos, hacemos una aserción del tipo devuelto para cumplir con la interfaz
// En la implementación de RepoNotesSQL se añade un método generateSQL que no está en la interfaz
{
    class RepoNotesSQL {
        read() {
            return [];
        }
        readById(id) {
            return { id };
        }
        create(data) {
            return { data };
        }
        update(id, data) {
            return { id, data };
        }
        delete(id) {
            return { id };
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
            return { id };
        }
        create(data) {
            return { data };
        }
        update(id, data) {
            return { id, data };
        }
        delete(id) {
            return { id };
        }
    }
    // Las instancias de las clases son de tipo Repository<Note>
    // De esa forma son intercambiables cualquiera de las clases que implementen la interfaz Repository<Note>
    // El inconveniente es que incluso en la clase que lo tiene, no se puede acceder a un método propio de la clase como generateSQL
    // Por lo que no se puede llamar al método generateSQL en la instancia de RepoNotesMongo
    // Para solucionar esto, se puede hacer una aserción de tipo
    const repo = new RepoNotesSQL();
    repo.read();
    repo.generateSQL();
}
// DESARROLLO DEL CÓDIGO
{
    // Como mocks, generamos funciones de lectura escritura capaces de leer y escribir en un almacenamiento (e,g, Fichero)
    function readFromDisk() {
        return '';
    }
    function writeToDisk(data) { }
    // Creamos una clase que implementa la interfaz ORM
    // Necesitaremos algunas utilidades de tipos de TypeScript
    // Partial<T> para definir un tipo con todas las propiedades de T como opcionales
    // Exclude<T, U> para excluir de T los tipos que están en U
    class ORMLite {
        file;
        constructor(file) {
            this.file = file;
        }
        readDB() {
            const txtData = readFromDisk();
            return JSON.parse(txtData);
        }
        writeDB(data) {
            writeToDisk(JSON.stringify(data));
        }
        read(collection) {
            // const txtData = readFromDisk();
            // const allData = JSON.parse(txtData);
            const allData = this.readDB();
            return allData[collection];
        }
        readById(collection, id) {
            // const txtData = readFromDisk();
            // const allData = JSON.parse(txtData);
            const allData = this.readDB();
            const item = allData[collection].find((item) => item.id === id);
            if (item === undefined) {
                throw new Error(`Item with id ${id} not found`);
            }
            return item;
        }
        create(collection, initialData) {
            // const txtData = readFromDisk();
            // const allData = JSON.parse(txtData);
            const allData = this.readDB();
            const itemData = {
                ...initialData,
                id: crypto.randomUUID().substring(0, 8),
            };
            allData[collection].push(itemData);
            // writeToDisk(JSON.stringify(allData));
            this.writeDB(allData);
            return itemData;
        }
        updateById(collection, id, data) {
            // const txtData = readFromDisk();
            // const allData = JSON.parse(txtData);
            const allData = this.readDB();
            let itemIndex = allData[collection].findIndex((item) => item.id === id);
            if (itemIndex === -1) {
                throw new Error(`Item with id ${id} not found`);
            }
            allData[collection][itemIndex] = Object.assign(allData[collection][itemIndex], data);
            // allData[collection][itemIndex] = { ...allData[collection][itemIndex], ...data }; // Otra forma de hacerlo
            // writeToDisk(JSON.stringify(allData));
            this.writeDB(allData);
            return allData[collection][itemIndex];
        }
        deleteById(collection, id) {
            // const txtData = readFromDisk();
            // const allData = JSON.parse(txtData);
            const allData = this.readDB();
            const item = allData[collection].find((item) => item.id === id);
            if (item === undefined) {
                throw new Error(`Item with id ${id} not found`);
            }
            allData[collection] = allData[collection].filter((item) => item.id !== id);
            // writeToDisk(JSON.stringify(allData));
            this.writeDB(allData);
            return item;
        }
    }
    class RepoItemFile {
        orm = new ORMLite('items.json');
        collection = 'items';
        read() {
            return this.orm.read(this.collection);
        }
        readById(id) {
            return this.orm.readById(this.collection, id);
        }
        create(data) {
            return this.orm.create(this.collection, data);
        }
        update(id, data) {
            return this.orm.updateById(this.collection, id, data);
        }
        delete(id) {
            return this.orm.deleteById(this.collection, id);
        }
    }
    const repo = new RepoItemFile();
    console.log(repo.read());
}
