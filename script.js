'use strict';

// parent scope
function calcAge(birthYear) {
  const age = 2024 - birthYear

  function printAge() {
    let output = `${firstName} You are ${age}. born in ${birthYear}`
    console.log(output);

    // Block scope
    if (birthYear >= 1981 && birthYear >= 1996) {
      // creating New variable with same name as outer scope's variable 
      const firstName = `Bob`

      // reassigning outer scope's variable 
      output = 'NEW OUTPUT!';
      const str = `0h, and you're not a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      console.log(output);

    }
  }
  printAge();

  return age;
}
// Global Scope
const firstName = 'Malik';
calcAge(1998);

// Variable Hoisting
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Malik';
let job = 'digital marketer';
const year = 1998;

// Functions
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
console.log(addArrow);
// console.log(addArrow(2,3));


function addDecl(a,b) {
  return a + b;
}

const addExpr = function(a,b) {
  return a + b
}

var addArrow = (a ,b) => a + b; 

// Example
console.log(undefined);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
} 

var x = 1;
let y = 2;
const z = 3; 

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);