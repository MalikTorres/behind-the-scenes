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