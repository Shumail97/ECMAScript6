/** @format */

// We have an object storing the salaries of our team:

// let salaries = {
//   Fred: 100,
//   Ted: 160,
//   Ghaith: 130
// }
// Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.

let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130,
};
//Object.values(salaries) returns an array of the salaries: [100, 160, 130].
//reduce((a, b) => a + b, 0) sums up the array elements, starting with an initial value of 0. If the array is empty, the result will be 0

let sum = Object.values(salaries).reduce((a, b) => a + b, 0);

console.log(sum); // Output: 390

// ALternative
// let sum = 0;
// for (let name in salaries) {
//   sum += salaries[name];
// }
// console.log(sum);
