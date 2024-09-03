//  ********************************* Array **************************************

// let myArray = ["Mango", "Banana", "Grapes", "Orange", "Watermelon", "Gavava", "Blueberry"]
// console.log(myArray);
//************************ */--------- show myArray elements--------

// console.log(myArray);

//*************************** */ --------show myArray length----------

// console.log(myArray.length);

// **************************** push add element at the end of the array ******************************

// myArray.push("Melon")
// console.log(myArray); //--------- add melon -----------

//********************************* pop remove element at the end of the array ******************************** */

// myArray.pop();
// console.log(myArray); //----------- remove last element----------- 

// myArray.shift(); // _---------remove first element
// console.log(myArray); 

// ************************** Unshift is use to add element at the start of the array **************************** {Not preffer(⚠)}

// myArray.unshift("Nehal"); // _------------ add nehal at the start of the array -------------
// console.log(myArray);

// ********************************* length is use to find how many elements are there in an array *******************

// console.log(myArray.length); // length start from 0 

// ******************************** indexOf use to find index of an element in an array ************************

// console.log( myArray.indexOf("Gavava")); //--indexOf Gavava is 5
// console.log(myArray.indexOf("Orange",3)); // -- the index after commas indecate to start search index --

// ********************************* slice make a copy of original array from start index to end index **********************

// console.log(myArray.slice(2,5)); // show 3 elements of index 2,3,4

// **************************** splice use to remove elements from the starting giving index to the next given number ****************

// myArray.splice(2,4,"Nehal","Shehzad"); // in this line remove 4 elements from index 2 but the third value use to add values from deleting elements place
// console.log(myArray);


// ___----------------------------____End Array____---------------------------

// ****************************** Loops *****************************

//--------------- for printing name --------------------
// for (let i = 0; i <= 10; i++) {
//     console.log(i, "Nehal", "Waseem");
// }

// -------------- print even numbers except 0 ------------------
// for (let even = 2; even <= 40; even += 2) {
//     console.log("This is even Numbers :", even);
// }

// ------------- print odd numbers except 0 ----------------
// for (let odd = 0; odd <= 40; odd += 2) {
//     console.log("This is odd Number :", odd + 1);
// }

//''''''''''''''''''''===16-April-2024-Tuesday-=====''''''''''''''''''''''''//

let name = [' Nehal',' Shehzad',' Saif'];

for (let i = 0; i < name.length; i++) {
    console.log((i+1) + name[i]);
}

let myArray = [
    [2,3,2,3,],
    [4,5,6,7],
    [3.9,7,8],
    [4,7,6,7]
]
console.log(myArray);

for (let i = 0; i < 2; i++) {
    console.log('First loop');
    for (let j = 0; j < 3; j++) {
        console.log('loop is running');
    } 
}
