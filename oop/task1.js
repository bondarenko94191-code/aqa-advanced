import { Book } from "./Book.js";
import { DateChecker } from "./Date.js";
import { EBook } from "./EBook.js";

const oldestBook = new Book("Romeo and Juliet", "William Shakespeare", 1597);
const newestBook = new Book("The Psychology of Money", "Morgan Housel", 2020);
const schoolBook = new Book("Math", "Vashulenko", 2025);
const myBook = new EBook("Atomic Habits", "James Clear", 2021, "pdf");
const result = Book.returnBook([
    oldestBook,
    newestBook,
    schoolBook,
    myBook
]);
const eBook = EBook.fromBook(book, "pdf");





oldestBook.printInfo();
newestBook.printInfo();
schoolBook.printInfo();
myBook.printInfo();
console.log("Oldest book:", result);
eBook.printInfo();
