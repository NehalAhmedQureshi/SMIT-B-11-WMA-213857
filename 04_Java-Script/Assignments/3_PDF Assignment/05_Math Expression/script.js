// *************************************** Question 1 *********************************
let num1 = 4;
let num2 = 6;
let num1_num2 = num1 + num2;

console.log("Sum of " + num1 + " & " + num2 + " is " + num1_num2);

// *************************************** Question 2 *********************************
// --------------------------------------- Subtraction--------------------------------
let num3 = 4;
let num4 = 6;
let num3_num4 = num3 - num4;

console.log("Subtraction of " + num3 + " & " + num4 + " is " + num3_num4);
// --------------------------------------- Multiplication--------------------------------
let num5 = 4;
let num6 = 6;
let num5_num6 = num5 * num6;

console.log("Multiplication of " + num5 + " & " + num6 + " is " + num5_num6);
// --------------------------------------- Division--------------------------------
let num7 = 4;
let num8 = 6;
let num7_num8 = num7 / num8;

console.log("Division of " + num7 + " & " + num8 + " is " + num7_num8);
// --------------------------------------- Modulus--------------------------------

let num9 = 4;
let num0 = 6;
let num9_num0 = num9 % num0;

console.log("Modulus of " + num9 + " & " + num0 + " is " + num9_num0);

// *************************************** Question 3 *********************************
let number
console.log("Value of declared variable is: " + number);

number = 5;
console.log("Initial value is: " + number);

number = ++number;
console.log("Value after increament is: " + number);

number += 7;
console.log("Value after addition is: " + number);

number = --number;
console.log("Value after decrement is: " + number);

number = number % 3;
console.log("The reminder is: " + number);

// *************************************** Question 4 *********************************
let ticketPrize = 600;
ticketPrize = ticketPrize * 5;

console.log("Total cost to buy 5 Tickets to a movie is " + ticketPrize + "PKR");

// *************************************** Question 5 *********************************
let table = 4;

console.log("Table of 4 is : ");
console.log("4 x 1 = " + table * 1);
console.log("4 x 2 = " + table * 2);
console.log("4 x 3 = " + table * 3);
console.log("4 x 4 = " + table * 4);
console.log("4 x 5 = " + table * 5);
console.log("4 x 6 = " + table * 6);
console.log("4 x 7 = " + table * 7);
console.log("4 x 8 = " + table * 8);
console.log("4 x 9 = " + table * 9);
console.log("4 x 10 = " + table * 10);

// *************************************** Question 6 *********************************
let temperatureInCelcius = 25
let temperatureInFarenheit = 70

let changeCelciusToFarenheit = (temperatureInCelcius * 9 / 5) + 32;
let changeFarenheitToCelcius = (temperatureInFarenheit - 32) * 5 / 9;

console.log(temperatureInFarenheit + "⁰F" + " is " + changeFarenheitToCelcius + "⁰C");
console.log(temperatureInCelcius + "⁰C" + " is " + changeCelciusToFarenheit + "⁰F");

// *************************************** Question 7 *********************************
let priseOfItem1 = 650;
let quantityOfItem1 = 3;
let priseOfItem2 = 100;
let quantityOfItem2 = 7;
let shippingCharges = 100;
let total = priseOfItem1 + priseOfItem2 + shippingCharges;

document.getElementById("list1").innerHTML = ("Prise of Item 1 is: " + priseOfItem1)
document.getElementById("list2").innerHTML = ("Prise of Item 2 is: " + priseOfItem2)
document.getElementById("list3").innerHTML = ("Quantity of Item 1 is: " + quantityOfItem1)
document.getElementById("list4").innerHTML = ("Quantity of Item 2 is: " + quantityOfItem2)
document.getElementById("list5").innerHTML = ("Shipping Charges " + shippingCharges)


document.getElementById("list6").innerHTML = ("Total cost of your order is " + total + "PKR");

// *************************************** Question 8 *********************************
let totalnumber = 980;
let obtainNumber = 804;
let percentage = (obtainNumber / total) * 100;

document.getElementById("mainHeading").innerHTML = "Marks Sheet";
document.getElementById("line1").innerHTML = "Total Marks: " + totalnumber;
document.getElementById("line2").innerHTML = "Obtain Marks: " + obtainNumber;
document.getElementById("line3").innerHTML = "Percentage " + percentage;

// *************************************** Question 9 *********************************

let dollar = 10;
let riyal = 25;
let pakistanDollar = 104.80;
let pakistaniRiyal = 28;
let changeCurrency = dollar * pakistanDollar + riyal * pakistaniRiyal;
// let changeRiyalToPakistan = riyal*pakistaniRiyal;

document.getElementById("heading").innerHTML = ("Currency in PKR");
document.getElementById("para").innerHTML = ("Total Currency in PKR =" + changeCurrency);

// *************************************** Question 10 *********************************

let arithmetic = 2;
aritmetic = 2 + 5 * 10 / 2;

console.log(arithmetic);

// *************************************** Question 11 *********************************

let birthYear = 2007;
let currentYear = 2024;
let age = currentYear - birthYear;

console.log("Your Birth Year = " + birthYear);
console.log("Current Year = " + currentYear);
console.log("Your age = " + age);

// *************************************** Question 12 *********************************

let radius = 25;
const pi = 3.142;
let calculateCircumference = 2 * pi * radius;
let calculateArea = pi * radius**2

console.log("The Circumference is :" + calculateCircumference);
console.log("The Area is : " + calculateArea);

// *************************************** Question 13 *********************************

let favoriteSnack = "Chocolate Chip";
let currentAge = 15;
let maximumAge = 65;
let snackPerDay = 3;
let calculate = (maximumAge - currentAge) * 3;

console.log("You will need " + calculate + " chocolate chip to last you until the ripe old age of 65");