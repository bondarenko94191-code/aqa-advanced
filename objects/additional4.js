// 4. Аналіз результатів тестів
// Опис:

// Є масив результатів тестів:

// const testResults = [
//   { name: "Login test", passed: true },
//   { name: "Checkout test", passed: false },
//   { name: "Profile test", passed: true }
// ];
// Напиши функцію analyzeTests(testResults).

// Потрібно:

// Порахувати кількість passed і failed
// Повернути об’єкт:
// {
//   passed: 2,
//   failed: 1,
//   status: "Build failed"
// }
// status:

// "Build failed" - якщо є хоча б один failed
// "Build passed" - якщо всі тести пройшли

const testResults = [
    { name: "Login test", passed: true },
    { name: "Checkout test", passed: false },
    { name: "Profile test", passed: true }
];
function analyzeTests(testResults) {
    const passedTests = testResults.filter((testResults) => (testResults.passed === true)).length;
    const failedTests = testResults.filter((testResults) => (testResults.passed === false)).length;
    let status = failedTests > 0 ? "Build failed" : "Build passed";

    return {
        passedTests,
        failedTests,
        status
    };
}
console.log(analyzeTests(testResults));