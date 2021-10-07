'use strict';
/* 
  1. Given and object <peopleProps> and array <peopleData>, create array of <people> 
*/
console.group('1. Given an object <peopleProps> and array <peopleData>, create array of people ');
const peopleProps = ['name', 'surname', 'age'];
//                      0        1        2
const peopleData = [
  ['Mark', 'John', 'Lesley', 'Karson'], // i = 0
//  0         1        2        3       // indexPerson
  ['Jonathon', 'Smith', 'Grey', 'Grebl'], // i = 1
  [15, 39, 52, 99], // i = 2
];
// Using for cycle
{
  const people = [];
  for (let i = 0; i < peopleData[0].length; i++) {
    const person = {};
    for (let j = 0; j < peopleProps.length; j++) {
      person[peopleProps[j]] = peopleData[j][i];
    }
    people.push(person);
  }
  console.table(people);
}

// Using forEach
{
  const people = [];
  // Iterating through one of data arrays, just for the count of elements
  peopleData[0].forEach((name, indexPerson) => {
    const person = {};
    // Iterating through properties, 
    //  which should be equal to the count of arrays in <peopleData>
    peopleProps.forEach((prop, indexProp) => {
      person[prop] = peopleData[indexProp][indexPerson]; 
    });
    people.push(person);
  })
  console.table(people);
}

/*
  ... code
*/

// console.table(people);
console.groupEnd();

/* 
  2. Using <1.> task result array <people>, create property-function based on variable <methodName>.
  Function should simply log name <name> and <surname> props seperated by space in window.console
*/
console.group(' 2. Using <1.> task result array <people>, create property-function based on variable <methodName>.')
const methodName = 'logFullname';
/*
  ... code
*/

// people.forEach(p => p.logFullname())
console.groupEnd('');

