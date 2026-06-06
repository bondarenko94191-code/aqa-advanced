// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    {
        name: "Alice",
        email: "alice@gmail.com",
        age: 22,
        gender: "female"
    },
    {
        name: "John",
        email: "john@gmail.com",
        age: 33,
        gender: "male"

    },
    {
        name: "Adam",
        email: "adam6@gmail.com",
        age: 23,
        gender: "male"
    }
]
for (const { name, email, age, gender } of users) {
    console.log(name, email, age, gender);
}