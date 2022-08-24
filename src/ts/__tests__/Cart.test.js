"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = __importDefault(require("../service/Cart"));
const Book_1 = __importDefault(require("../domain/Book"));
const MusicAlbum_1 = __importDefault(require("../domain/MusicAlbum"));
const Movie_1 = __importDefault(require("../domain/Movie"));
test('new card should be empty', () => {
    const cart = new Cart_1.default();
    expect(cart.items.length).toBe(0);
});
test('amount with discount', () => {
    const cart = new Cart_1.default();
    cart.add(new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie_1.default(1011, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 180));
    expect(cart.discountedAmount(5)).toBe(2926);
});
test('amount without discount', () => {
    const cart = new Cart_1.default();
    cart.add(new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie_1.default(1011, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 180));
    expect(cart.amount()).toBe(3080);
});
test('remove item', () => {
    const cart = new Cart_1.default();
    cart.add(new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie_1.default(1011, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 180));
    const cart2 = new Cart_1.default();
    cart2.add(new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart2.add(new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900));
    cart.remove(1011);
    expect(cart).toEqual(cart2);
});
