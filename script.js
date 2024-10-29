'use strict';

// // parent scope
// function calcAge(birthYear) {
//   const age = 2024 - birthYear

//   function printAge() {
//     let output = `${firstName} You are ${age}. born in ${birthYear}`
//     console.log(output);

//     // Block scope
//     if (birthYear >= 1981 && birthYear >= 1996) {
//       // creating New variable with same name as outer scope's variable 
//       const firstName = `Bob`

//       // reassigning outer scope's variable 
//       output = 'NEW OUTPUT!';
//       const str = `0h, and you're not a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       console.log(output);

//     }
//   }
//   printAge();

//   return age;
// }
// // Global Scope
// const firstName = 'Malik';
// calcAge(1998);

// // Variable Hoisting
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Malik';
// let job = 'digital marketer';
// const year = 1998;

// // Functions
// console.log(addDecl(2,3));
// // console.log(addExpr(2,3));
// console.log(addArrow);
// // console.log(addArrow(2,3));


// function addDecl(a,b) {
//   return a + b;
// }

// const addExpr = function(a,b) {
//   return a + b
// }

// var addArrow = (a ,b) => a + b; 

// // Example
// console.log(undefined);
// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// } 

// var x = 1;
// let y = 2;
// const z = 3; 

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z); 



// THIS KEYWORD
// console.log(this); 

// const calcAge = function(birthYear) {
//   console.log(2024 - birthYear);
//   // console.log(this);
// };

// calcAge(1998); 


// const calcAgeArrow = birthYear => {
//   console.log(2024 - birthYear);
//   // console.log(this);
// };

// calcAgeArrow(1998); 

// malik.calcAge(); 

// const carmen = {
//   year: 1998,
// };
// // method borrowing
// carmen.calcAge = malik.calcAge; 
// carmen.calcAge();

// const f = malik.calcAge; 
// f();

// creates properties on the global object
// var firstName = 'Carmen';

// const malik = {
//   firstName: 'Malik',
//   year: 1998,
//   calcAge: function () {
//     console.log(this);
//     console.log(2024 - this.year);
    // SOLUTION 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   // This keyword is undefined inside of a regular function call
    //   console.log();
    //   // console.log(this.year >= 1981 && this.year >= 1996);
    //   console.log(self.year >= 1981 && self.year >= 1996);
    // };

    // SOLUTION 2 ARROW FUNCTION AND THIS KEYWORD
//     const isMillenial = () => {
//       console.log(this);
//       // console.log(this.year >= 1981 && this.year >= 1996);
//       console.log(this.year >= 1981 && this.year >= 1996);
//     };
//     isMillenial();
//   },
//   // Do not create methods using arrow functions
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   }
// };
// malik.greet();
// malik.calcAge();


// arguements keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5);

// arguments keyword does not work in arrow functions
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b
// };

// addArrow(2,5,8); 
/*
let age = 26;
let oldAge = age;
age = 27;
console.log(age);
console.log(oldAge);

const me = {
  name: `Jonas`,
  age: 26,
};

const friend = me;
friend.age = 28;
console.log('Friend:', friend);
console.log('Me', me);
*/
// Primitive types
let lastName = 'Torres';
let oldLastName = lastName;
lastName = 'Rivera';
console.log(lastName, oldLastName);

// Reference types
const carmen = {
  firstName: "Carmen",
  lastName: 'Garrigues',
  age: 26,
};

// Another variable in the stack holding the reference to the original address
const marriedCarmen = carmen; 
marriedCarmen.lastName = 'Torres';
console.log('Before marrage', carmen);
console.log('After marriage', marriedCarmen); 

// Copying objects
const carmen2 = {
  firstName: "Carmen",
  lastName: 'Garrigues',
  age: 26,
  family: ['Lucia','Nacho'],
}; 
// shallow copy, copies in the first level
const carmenCopy = Object.assign({}, carmen2);
carmenCopy.lastName = 'Torres';

carmenCopy.family.push('Maria');
carmenCopy.family.push('Salva')
console.log('Before marriage:', carmen2);
console.log('After marriage:', carmenCopy);