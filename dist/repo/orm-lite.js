export class ODMLite {
    file;
    constructor(file, collection) {
        this.file = file;
        this.collection = collection;
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
        let item = allData[collection].find((item) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        item = Object.assign(item, data);
        // item = { ...item ...data }; // Otra forma de hacerlo
        // writeToDisk(JSON.stringify(allData));
        this.writeDB(allData);
        return item;
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
