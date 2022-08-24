"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movie {
    constructor(id, name, year, country, tagline, genre, time, price) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.country = country;
        this.tagline = tagline;
        this.genre = genre;
        this.time = time;
        this.price = price;
    }
}
exports.default = Movie;
