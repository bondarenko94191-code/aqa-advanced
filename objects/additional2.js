// 2. Аналіз оцінок студента
// Опис:

// Функція отримує масив оцінок.

// Потрібно:

// порахувати середній бал
// повернути відповідний меседж:
// < 3 → "Failed"
// 3–4 → "Passed"
// > 4 → "Excellent"
let mark = [4, 4, 5, 5, 5];
let sum = mark.reduce((accumulator, mark) => accumulator + mark, 0);
let average = sum / mark.length;

function studentsResult(average) {
    if (average < 3) {
        return "Failed";
    }
    else if (average >= 3 && average <= 4) {
        return "Passed";
    } else {
        return "Excellent";
    }
}
console.log(studentsResult(average));