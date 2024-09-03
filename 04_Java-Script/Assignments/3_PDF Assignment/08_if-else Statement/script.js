// //  ******************************** Question 1 *********************************

// let checkCharacter = prompt("Enter a character to check it's a alphabet or a number ?");

// if (checkCharacter >= A || checkCharacter <= Z) {
//     alert("You write a capital english alphabet")
// }
// else if (checkCharacter >= a || checkCharacter <= z) {
//     alert("You write a small english alphabet")
// }
// else if (checkCharacter >= 0 || checkCharacter <= 0) {
//     alert("You write a number");
// }

// //  ******************************** Question 2 *********************************

// let firstInteger = +prompt("Enter first integer ?", 1)
// let secondInteger = +prompt("Enter second integer ?", 1)

// if (firstInteger > secondInteger) {
//     alert(firstInteger);
// }
// else if (secondInteger > firstInteger) {
//     alert(secondInteger)
// }
// else if (firstInteger == secondInteger) {
//     alert("Both integers are equal")
// }
// else {
//     alert("You write invalid integer");
// }

// //  ******************************** Question 3 *********************************

// let checkNumber = prompt("Enter number to check it is positive , negative or zero");

// if (checkNumber > 0) {
//     alert("You write positive number");
// }
// else if (checkNumber = 0) {
//     alert("You write zero");
// }
// else if (checkNumber < 0) {
//     alert("You write negative number");
// }
// else {
//     alert("You write invalid number");
// }

//  ******************************** Question 4 *********************************

let checkString = prompt("Enter an alphabet to check it is vowel or not !");
// let vowel = ["a", "e", "i", "o", "u"];

if (checkString == "a" || checkString == "e" || checkString == "i" || checkString == "o" || checkString == "u") {
    console.log("True");
}
else {
    console.log("False");
}

//  ******************************** Question 5 *********************************

let newPassword = prompt("Please enter your password");
let confirmPassword = prompt("Please confirm your password");
let password = newPassword === confirmPassword;

if (newPassword === confirmPassword) {
    alert("“Correct! The password you entered matches the original password”")
}
else {
    alert("Incorrect Password")
}

//  ******************************** Question 6 *********************************

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
// In this statement two curly brackets are missing I've placed it's in it possition

//  ******************************** Question 7 *********************************

let time = +prompt("Enter time in 24 hours format", "i.e" + 1300);




else if (time == 100) {
    alert("1AM")
}
else if (time == 200) {
    alert("2AM")
}
else if (time == 300) {
    alert("3AM")
}
else if (time == 400) {
    alert("4AM")
}
else if (time == 500) {
    alert("5AM")
}
else if (time == 600) {
    alert("6AM")
}
else if (time == 700) {
    alert("7AM")
}
else if (time == 800) {
    alert("8AM")
}
else if (time == 900) {
    alert("9AM")
}
else if (time == 1000) {
    alert("10AM")
}
else if (time == 1100) {
    alert("11AM")
}
else if (time == 1200) {
    alert("12PM")
}
else if (time = 1300) {
    alert("1PM")
}
else if (time = 1400) {
    alert("2PM")
}
else if (time = 1400) {
    alert("3PM")
}
else if (time = 1500) {
    alert("4PM")
}
else if (time = 1600) {
    alert("5PM")
}
else if (time = 1800) {
    alert("6PM")
}
else if (time = 1900) {
    alert("7PM")
}
else if (time = 2000) {
    alert("8PM")
}
else if (time = 2100) {
    alert("9PM")
}
else if (time = 2200) {
    alert("10PM")
}
else if (time = 2300) {
    alert("11PM")
}
else if (time = 2400) {
    alert("12AM")
}