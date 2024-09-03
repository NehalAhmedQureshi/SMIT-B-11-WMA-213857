
let matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log('Matrix 1 => ' + matrix1);

let matrix2 = [
    [2,4,6],
    [1,3,6],
    [2,5,8]
]
console.log('Matrix 2 => ' + matrix2);

const one = matrix1[0][0] + matrix2[0][0];
const two = matrix1[0][1] + matrix2[0][1];
const three =matrix1[0][2] + matrix2[0][2];


const four =matrix1[1][0] + matrix2[1][0];
const five =matrix1[1][1] + matrix2[1][1];
const six = matrix1[1][2] + matrix2[1][2];

const seven =matrix1[2][0] + matrix2[2][0];
const eight =matrix1[2][1] + matrix2[2][1];
const nine = matrix1[2][2] + matrix2[2][2];

const addMatrix = [
    [one ,two , three],
    [four,five,six],
    [seven,eight ,nine]
]
console.log('Addition of Matrix 1 and Matrix 2 ' + addMatrix);

