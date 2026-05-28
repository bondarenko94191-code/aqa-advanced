// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

// function declaration

function getArea(width, height) {
    return width * height;
}
console.log(getArea(12, 12));

//  function expression 

const printArea = function (width, height) {
    return width * height;
}
console.log(printArea(10, 10))

// arrow function

const areaArrow = (width, height) => {
    return width * height;
}
console.log(areaArrow(2, 4))