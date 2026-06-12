import { Book } from "./Book.js";

export class EBook extends Book {
    constructor(title, author, publicationYear, format) {
        super(title, author, publicationYear);
        this._format = format;
    }
    static fromBook(bookInstance, format) {
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.publicationYear, format);
    }
    printInfo() {
        console.log(`${this.title} was written by ${this.author} in ${this.publicationYear}. The format of book is ${this.format}`);
    }
    get format() {
        return this._format;
    }
    set format(value) {
        if (typeof value !== "string" || value.length === 0) {
            console.log("Invalid format");
            return;
        }

        this._format = value;
    }

}