// *************************************** Question 1 *********************************
let a = 10;
console.log("The value of a is : " + a);

// a = ++a;
console.log("The value of ++a is : " + ++a);
console.log("Now the value of a is" + a);

console.log("The value of a++ is :" + a++);
console.log("The value of a is :" + a);

console.log("The value of --a is : " + --a);
console.log("The value of a is : " + a);

console.log("The value of a-- is : " + a--);
console.log("The value of a is : " + a);

// *************************************** Question 2 *********************************
var A = 2;
var B = 1;
var result = --A - --B + ++B + B--; // Result = 3

--A; //   1 
--A - --B; // 1 - 0 = 1
--A - --B + ++B; // 1 - 0 + 1 = 2
--A - --B + ++B + B--; // 1 - 0 + 1 + 1 = 3

// *************************************** Question 3 *********************************
let username = prompt("Enter your name?");

alert("Asalam u alaikum! " + username);

// *************************************** Question 5 *********************************

let num = prompt("Enter a number which you want to display table", 5);

alert(num + " x 1 = " + num * 1 + "\n" +
    num + " x 2 = " + num * 2 + "\n" +
    num + " x 3 = " + num * 3 + "\n" +
    num + " x 4 = " + num * 4 + "\n" +
    num + " x 5 = " + num * 5 + "\n" +
    num + " x 6 = " + num * 6 + "\n" +
    num + " x 7 = " + num * 7 + "\n" +
    num + " x 8 = " + num * 8 + "\n" +
    num + " x 9 = " + num * 9 + "\n" +
    num + " x 10 = " + num * 10);

// *************************************** Question 6 *********************************

let sub1 = prompt("Enter First Subject Name?", "English");
let sub2 = prompt("Enter Second Subject Name?", "English");
let sub3 = prompt("Enter Third Subject Name?", "English");

let sub1_marks = prompt("Enter obtained marks in " + sub1);
let sub2_marks = prompt("Enter obtained marks in " + sub2);
let sub3_marks = prompt("Enter obtained marks in " + sub3);

let totalMarks = 100;

let sub1_percentage = (sub1_marks / totalMarks) * 100 ;
let sub2_percentage = (sub2_marks / totalMarks) * 100 ;
let sub3_percentage = (sub3_marks / totalMarks) * 100 ;

// ******************************** For Subjests **************************
document.getElementById("sub1").innerHTML= (sub1);
document.getElementById("sub2").innerHTML= (sub2);
document.getElementById("sub3").innerHTML= (sub3);

// ******************************* for total marks *************************
document.getElementById("totalmarks_sub1").innerHTML=(totalMarks);
document.getElementById("totalmarks_sub2").innerHTML=(totalMarks);
document.getElementById("totalmarks_sub3").innerHTML=(totalMarks);
// ****************************** for obtained Marks ************************
document.getElementById("sub1_obtianMarks").innerHTML=(sub1_marks);
document.getElementById("sub2_obtianMarks").innerHTML=(sub2_marks);
document.getElementById("sub3_obtianMarks").innerHTML=(sub3_marks);

//  *************************** for percentage **************************

document.getElementById("sub1_percentage").innerHTML = (sub1_percentage + "%");
document.getElementById("sub2_percentage").innerHTML = (sub2_percentage + "%");
document.getElementById("sub3_percentage").innerHTML = (sub3_percentage + "%");

//  ************************ grand total ********************************

document.getElementById("one").innerHTML= (totalMarks + totalMarks + totalMarks);
document.getElementById("two").innerHTML= (sub1_marks + sub2_marks + sub3_marks);
document.getElementById("three").innerHTML= (sub1_percentage + sub2_percentage + sub3_percentage);