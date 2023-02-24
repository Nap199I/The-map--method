  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop

let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);

// Using map() (same as above using the map method)

const multiplyByTwo = (num) => num * 2;

const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);

// Simplified w/ map()

const Simplified = nums.map( function (num) {return num * 2});

console.log(Simplified);


// Simplfied w/ map() + arrow function (the function num doesnt need the paranthases because it only takes one value)

const mapResults2 = nums.map(num => num * 2);

console.log(mapResults2);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map( student => [student.name, student.id] );
console.log(studentsWithIds);