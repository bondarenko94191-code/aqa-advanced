// Завдання 3

// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

async function getTodos() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const todos = await response.json();
    return todos;
}
async function getUser() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    const user = await response.json();
    return user;
}
async function getData() {
    const dataTodos = await getTodos();
    const dataUser = await getUser();

    console.log(dataTodos);
    console.log(dataUser);
}
getData()