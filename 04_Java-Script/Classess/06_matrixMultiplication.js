let matrix1 = [
  [1, 2, 3],
  [5, 6, 7],
  [6, 8, 9],
];

let matrix2 = [
  [0, 1, 6],
  [5, 4, 7],
  [6, 2, 9],
];

let result = [];

for (let i = 0; i < 3; i++) {
  result.push([]);

  for (let j = 0; j < 3; j++) {
    // console.log(matrix1[i``][j] + matrix2[i][j]); // matrix addition

    let sum = matrix1[i][j] * matrix1[i][j]; // matrix multiplication
    result[i].push(sum);
    // console.log(j);
  }
}

console.log(result);
// ----------------------------------- 20 april ------------------------------

let array = ["ali", "nehal", "ahmed"];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i][0].toUpperCase() + array[i].slice(1));
// }

/////////////////////// split ///////////////////

let string = "mY naMe Is nEhal";
string = string.toLowerCase();

let words = string.split(" ");
// console.log(words);

for (let i = 0; i < words.length; i++) {
  console.log(words[i][0].toUpperCase() + words[i].slice(1));
}
