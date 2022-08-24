"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this._items = [];
    }
    add(item) {
        this._items.push(item);
    }
    get items() {
        return [...this._items];
    }
    amount() {
        return this._items.reduce((a, b) => a + b.price, 0);
    }
    discountedAmount(discount) {
        return this.amount() * (100 - discount) / 100;
    }
    remove(id) {
        const index = this._items.findIndex((element) => {
            return id == element.id;
        });
        this._items.splice(index, 1);
    }
}
exports.default = Cart;
