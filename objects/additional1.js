// 1. Валідація пароля
// Опис:

// Напиши функцію validatePassword(password, repeatPassword).

// Умови:

// паролі мають співпадати
// мінімальна довжина - 8 символів
// пароль має містити хоча б одну цифру
// пароль має містити хоча б одну літеру
// Повернути:

// "Password is valid" або
// конкретну помилку: "Passwords do not match", "Password too short", "Password must contain a number", "Password must contain a letter"


function validatePassword(password, repeatPassword) {
    if (repeatPassword !== password) {
        return "Password is not valid";
    }
    if (password.length < 8) {
        return "Password too short";
    }
    if (!/[0-9]/.test(password)) {
        return "Password must contain at least one digit";
    }
    if (!/[a-zA-Z]/.test(password)) {
        return "Password must contain a letter";
    }

    return "Password is valid";
}


console.log(validatePassword("test11111", "test11111"));