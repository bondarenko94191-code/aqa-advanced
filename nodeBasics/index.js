import chalk from 'chalk'

let person = {
    firstName: "Alina",
    lastName: "Tiupalova",
    age: 31,
};
console.log(person);

let title = 'Senior Software Test Engineer';
console.log(chalk.greenBright(title));

let company = 'EPAM Systems';
console.log(chalk.yellowBright(company));

