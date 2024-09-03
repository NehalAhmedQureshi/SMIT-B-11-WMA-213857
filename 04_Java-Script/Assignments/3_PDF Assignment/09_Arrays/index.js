//  ******************************** Question 2 *********************************

let studentNames = []

//  ******************************** Question 3 *********************************
let string = ["Alphabets", "Math", "English", "Urdu"];

//  ******************************** Question 4 *********************************
let number = [1, 2, 3, 4, 5, 6];

//  ******************************** Question 5 *********************************
let boolean = [true, false];

//  ******************************** Question 6 *********************************
let mixed = ["String", 22, 34, true, false];

//  ******************************** Question 7 *********************************
let qualification = ["SSC", "HSC", "BCS", "BS", " BCOM", " MS", " M.Phil", "PhD"];

// console.log(qualification);

//  ******************************** Question 8 *********************************

let studentOneName = "Nehal";
let studentTwoName = "Shahid";
let studentThreeName = "Zubair";

let studentOneScore = 250;
let studentTwoScore = 250;
let studentThreeScore = 250;

let totalScore = 500 ;

// console.log(`Score of ${studentOneName} is ${totalScore-studentOneScore}.Percentage: ${(studentOneScore/totalScore)*100}%`);
// console.log(`Score of ${studentTwoName} is ${totalScore-studentTwoScore}.Percentage: ${(studentTwoScore/totalScore)*100}%`);
// console.log(`Score of ${studentThreeName} is ${totalScore-studentThreeScore}.Percentage: ${(studentThreeScore/totalScore)*100}%`);

//  ******************************** Question 9 *********************************

let color = ["Red","blue","Yellow","Green","Black"]
// alert(color);

// let addColor = prompt("Enter color name would you like to add at the end of the array")

// color.push(addColor)
// alert(color)

// let addEndColor = prompt("Enter color name would you like to add at the start of the array")

// color.unshift(addEndColor)
// alert(color)
console.log(color);

color.push("Pink")
color.unshift("Grey")

console.log(color);

color.pop()
console.log(color);

color.shift()
console.log(color);

color.map

//  ******************************** Question 10 *********************************

let studentScore =[223,344,123,343,];

// console.log(studentScore);

function one (){
    // studentScore.push(prompt("Enter Students Score: "))
}
one()

console.log(studentScore);
studentScore.sort()
console.log(studentScore);

//  ******************************** Question 11 *********************************
const printCityName = document.querySelector("#citiesNames")
const printSelectedCity = document.querySelector("#selectedCities")


let cities = ['Karachi','Lahore','Islamabad','Hyderabad','Peshawar']

let citiesName = (cities);

let selectedCities =(cities.slice(1,4))

// console.log(cities);

printCityName.innerHTML = citiesName;
printSelectedCity.innerHTML = selectedCities;

//  ******************************** Question 12 *********************************

let varible = ['This','is','an','array']
console.log(varible);

console.log(varible.join(" "));

//  ******************************** Question 15 *********************************

let phoneStore = ['Apple','Samsung','Nokia','Motrolla','Sony'];
document.getElementById("phone").innerHTML = phoneStore