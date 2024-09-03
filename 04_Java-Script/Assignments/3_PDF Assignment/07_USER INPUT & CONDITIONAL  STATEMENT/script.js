//  ******************************** Question 1 *********************************

let city = prompt("Enter your city name ?");

if (city === "Karachi") {
    alert("“Welcome to city of lights”");
} else {
    alert("Welcome! to ", city);
}

//  ******************************** Question 2 *********************************

let gender = prompt("Enter your gender:?", "Male");

if (gender === "Male") {

    alert("Good Morning Sir.")
}
else if (gender === "Female") {

    alert("Good Morning Ma’am.")
}
else {

    alert("This is not a gender")
}

//  ******************************** Question 3 *********************************

let signal = prompt("What color of signal is it?", "Red");

if (signal === "Red") {
    alert("Must Stop");
}
else if (signal === "Yellow") {
    alert("Ready to move");
}
else if (signal === "Green") {
    alert("Move now");
}
else {
    alert("This is not a valid signal color ");
}

//  ******************************** Question 4 *********************************

let fuel = prompt("Enter your remaining car fuel in liters", 1);

if (fuel <= 0.25) {
    alert(" “Please refill the fuel in your car”");
}
else {
    alert("Your fuel is in best health");
}

//  ******************************** Question 5 *********************************


var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

//  ******************************** Question 6 *********************************

let sub1TotalNumber = +prompt("Enter total marks of subject 1");
let sub2TotalNumber = +prompt("Enter total marks of subject 2");
let sub3TotalNumber = +prompt("Enter total marks of subject 3");

let sub1ObtainMarks = +prompt("Enter obtained marks in subject 1");
let sub2ObtainMarks = +prompt("Enter obtained marks in subject 2");
let sub3ObtainMarks = +prompt("Enter obtained marks in subject 3");

let grandTotal = sub1TotalNumber + sub2TotalNumber + sub3TotalNumber
let grandObtainTotal = sub1ObtainMarks + sub2ObtainMarks + sub3ObtainMarks
let percentage = (grandObtainTotal / grandTotal) * 100

document.getElementById("totalMarks").innerHTML = (grandTotal);
document.getElementById("totalObtainMarks").innerHTML = (grandObtainTotal);
document.getElementById("percentage").innerHTML = (percentage + "%");

if (percentage >= 80) {
    document.getElementById("grade").innerHTML = ("Your grade is : " + "A-One")
    document.getElementById("remarks").innerHTML = ("Your remarks is : " + "Excellent")
}
else if (percentage >= 70) {
    document.getElementById("grade").innerHTML = ("Your grade is : " + "A")
    document.getElementById("remarks").innerHTML = ("Your remarks is : " + "Good")

}
else if (percentage >= 60) {
    document.getElementById("grade").innerHTML = ("Your grade is : " + "B")
    document.getElementById("remarks").innerHTML = ("Your remarks is : " + "You need to improve")

}
else if (percentage < 60) {
    document.getElementById("grade").innerHTML = ("Your grade is : " + "Fail")
    document.getElementById("remarks").innerHTML = ("Your remarks is : " + "Sorry")
}

//  ******************************** Question 7 *********************************

let secretNumber = 5;

let userTry = +prompt("Enter my secret number : ", 1 + " to " + 10);

if (userTry === secretNumber) {
    alert("“Bingo! Correct answer”");
}
else if (userTry == 6 || userTry == 4) {
    alert("“Close enough to the correct answer”");
}
else {
    alert("You are too far!");
}

//  ******************************** Question 8 *********************************

let checkNumber = +prompt("Enter a number to check it is divisible by 3 or not!");
let divisible = checkNumber / 3

if (divisible == 0) {
    alert("This number is divisible by 3")
}
else {
    alert("This number is not divisible by 3")
}

//  ******************************** Question 9 *********************************

let number = +prompt("Enter number to check it is even or odd !");
let checkOdd = number / 3;
let checkEven = number / 2;

if (checkOdd == 0) {
    alert("This is an odd number ")
}
else if (checkEven == 0) {
    alert("This is an even number ")
}
else {
    alert("I think its not a number or blong to another catogery of number")
}

//  ******************************** Question 10 *********************************

let checkTemperature = prompt("Enter temperature ?");

if (checkTemperature > 40) {
    alert("“It is too hot outside.”")
}
else if (checkTemperature > 30) {
    alert("“The Weather today is Normal.”")
}
else if (checkTemperature > 20) {
    alert("“Today’s Weather is cool.”")
}
else if (checkTemperature > 10) {
    alert("“OMG! Today’s weather is so Cool.”")
}

//  ******************************** Question 11 *********************************

let firstValue = +prompt("Enter first value you want to calculate");
let secondValue = +prompt("Enter second value you want to calculate");
let operator = prompt("Enter what would you like to operate ?", "+ - / *");

if (operator == "+"){
    alert(firstValue + secondValue);
}
else if(operator == "-"){
    alert(firstValue - secondValue);
}
else if(operator == "*"){
    alert(firstValue * secondValue);
}
else if(operator == "/"){
    alert(firstValue / secondValue);
}
