// Завдання 2

// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// Copy code
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// Copy code
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних

function getTodos() {
    return fetch(`https://jsonplaceholder.typicode.com/todos/1`);
}
getTodos()
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })
    .catch(error => {
        console.log("Error happened");
    })

function getUser() {
    return fetch(`https://jsonplaceholder.typicode.com/users/1`);
}
getUser()
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })
    .catch(error => {
        console.log("Error happened");
    })
const getData = Promise.all([getTodos(), getUser()]);
getData
    .then(result => {
        console.log(`Promise all :`);
        console.log(result);
    })
Promise.race([getTodos(), getUser()])
    .then(result => {
        console.log("Promise race :");
        console.log(result);
    })