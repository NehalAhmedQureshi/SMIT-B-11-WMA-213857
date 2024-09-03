"use strict";
let form = document.querySelector('#tableForm');
console.log(form);
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
    event.preventDefault();
    let input = document.querySelector('#input'); //get input
    let inputValue = input.valueAsNumber; // get input value
    form === null || form === void 0 ? void 0 : form.reset(); // clear input
    let tableContent = ''; // assign empty
    for (let i = 1; i < 11; i++) {
        tableContent += `${inputValue} X ${i} = ${inputValue * i} <br>`;
    }
    let print = document.querySelector('.tablePrinter'); // get where print table
    if (print) {
        print.innerHTML = tableContent;
    }
});
