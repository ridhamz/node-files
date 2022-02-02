const numbers = [2, 5, 1, 10, 0, 3, 8];

numbers.sort(); //[0, 1, 10, 2, 3, 5, 8];
console.log(numbers);

// Ascending order
numbers.sort((a, b) => a - b); //[0, 1, 2, 3, 5, 8, 10];
console.log(numbers);

// Descending order
numbers.sort((a, b) => b - a); //[10, 8, 5, 3, 2, 1, 0];
console.log(numbers);
