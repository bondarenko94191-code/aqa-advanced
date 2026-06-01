// Завдання 3

// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

function divide(numerator, denominator) {
    if (typeof denominator !== "number" || typeof numerator !== "number") {
        throw new Error("Provided data is invalid");

    }
    if (denominator === 0) {
        throw new Error("Division by 0 is impossible");
    }
    return numerator / denominator;
}
try {
    console.log(divide(15, 3));
}
catch (error) {
    console.error(error.message);
}
finally {
    console.log("Робота завершена");
}

// try {
//     console.log(divide("hello", 3));
// }
// catch (error) {
//     console.error(error.message);
// }
// finally {
//     console.log("Робота завершена");
// }
// try {
//     console.log(divide(15, 0));
// }
// catch (error) {
//     console.error(error.message);
// }
// finally {
//     console.log("Робота завершена");
// }