const array = [9, 5, 2, 4, 11];
const newArray = [...array].sort((a, b) => a - b);
const diff = newArray[newArray.length - 1] - newArray[0];
console.log(diff);