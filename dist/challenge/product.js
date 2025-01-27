export class Product {
    // eslint-disable-next-line no-unused-private-class-members
    #sku;
    #name;
    #unityPrice;
    constructor(sku, name, unitaryPrice) {
        this.#sku = sku;
        this.#name = name;
        this.#unityPrice = unitaryPrice;
    }
    #calculatePrice(items) {
        return items * this.#unityPrice;
    }
    renderInvoiceLine(amount) {
        const tuple = ['', this.#calculatePrice(amount)];
        tuple[0] = `
        ${this.#name}: ${amount} unidades a ${this.#unityPrice}€ Total.................. ${tuple[1]}€`;
        return tuple;
    }
}
