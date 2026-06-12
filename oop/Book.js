import { DateChecker } from "./Date.js";

export class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    static returnBook(books) {
        return books.reduce((oldest, current) =>
            current.publicationYear < oldest.publicationYear ? current : oldest
        );
    }

    printInfo() {
        console.log(`${this.title} was written by ${this.author} in ${this.publicationYear}`);
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get publicationYear() {
        return this._publicationYear;
    }
    set title(value) {
        if (typeof value !== "string" || value.length === 0) {
            throw new Error("Invalid title");
            return;
        }
        this._title = value;
    }

    set author(value) {
        if (typeof value !== "string" || value.length === 0) {
            throw new Error("Invalid author");
            return;
        }
        this._author = value;
    }

    set publicationYear(value) {
        const currentYear = new Date().getFullYear();

        if (typeof value !== "number") {
            throw new Error("Year must be a number");
            return;
        }

        if (value > currentYear) {
            throw new Error("Year cannot be in the future");
            return;
        }
        this._publicationYear = value;
    }

}
