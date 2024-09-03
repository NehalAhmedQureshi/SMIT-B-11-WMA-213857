let form:HTMLFormElement|null = document.querySelector('#tableForm')


console.log(form);

form?.addEventListener("submit" , (event) => {
    event.preventDefault()
    let input : any = document.querySelector('#input'); //get input
    let inputValue : number = input.valueAsNumber  // get input value

    form?.reset(); // clear input
    let tableContent = '' // assign empty
    for (let i = 1; i < 11; i++) {

        tableContent += `${inputValue} X ${i} = ${inputValue*i} <br>`

    }
    
    let print: Element|null = document.querySelector('.tablePrinter') // get where print table
    
    if(print) {
        print.innerHTML = tableContent;
    }

})
