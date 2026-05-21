
// Завдання 3: Генерація таблиці множення

// Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .

// Виберіть число для якого потрібно згенерувати таблицю множення.
// Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
// Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.
import chalk from "chalk";
// loop with for 
console.log(chalk.blue('FOR'));

const number = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`)
}

// loop with while
console.log(chalk.green('WHILE'));

let number1 = 1;
while (number1 <= 10) {
    let number2 = 4;
    console.log(`${number2} * ${number1} = ${number2 * number1}`);
    number1++;
}