// Завдання 2

// Створіть функцію яка приймає один параметр: age.
// Усередині функції перевірте, чи age більше або рівне 18.
// Якщо age відповідає умові, поверніть true, інакше поверніть false.
// Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.

function isAdult(age) {
    return age >= 18;
}
console.log(isAdult(15));
console.log(isAdult(25));

//Is it possible to use this solution for displaying specific message?

// function isAdult(age) {
//     if (age >= 18) {
//         console.log('Adult');
//     }
//     else {
//         console.log('You are younger than required');
//     }

//     return age;
// }
// isAdult(20);
