
// ---------------------------------------- functions -------------------------------------

                                   
function myfunction(num1,num2) {      // num1 and num2 is parameters ----------------------
      let a = num1 + num2

      return 50 ;
}
 console.log(myfunction(5,6));


let array = [3,5,6,7,8]

console.log(array);
console.log(array.length);          //  -------- length is not a function -----



function average(myArray) {

      let sum = 0 

      for (let i = 0; i < myArray.length; i++) {

            sum += myArray[i]
            
      }

      return sum / myArray.length

}

console.log(average([2,4,5,6,7,6]));
console.log(average([2,4,5,6,7,6,10 , 40,100,1000]));


// ------------------------------------------ Arrow function --------------------------------

let sum = (a,b) => {
      return a+ b
}                               

console.log(sum(5));                    // -------------------- return ------------------ Nan

// +++++++++++++++++++++++++++++++++++++ single line Functions +++++++++++++++++++++++++++++++++

let sun =  (a,b)  => a + b 

console.log(sun(4,5));

// -------------------------------------- fast running function --------------------------

(function (){
      console.log('heloo');
})()

// -------------------------------------- Rest Function ----------------------------------
let multiply = 1
function trying(...c){

      
      // console.log(c.length);
      // console.log(c);

      for (let i = 0; i < c.length; i++) {
            multiply *= c[i]
      }
      return multiply
}

console.log(trying(2,4,5,6,7,8,9));

// -------------------------------- End Functions ---------------------------

