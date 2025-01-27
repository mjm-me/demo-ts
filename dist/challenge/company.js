export class Company {
    #nif;
    #name;
    constructor(nif, name) {
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
