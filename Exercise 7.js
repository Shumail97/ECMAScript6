/** @format */

if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}

//The ternary operator ?: is used to evaluate a condition and return one of two values.
//The condition (a + b < 4) is evaluated first.
//If the condition is true, the value 'Below' is assigned to result.
// If the condition is false, the value 'Over' is assigned to result.

let result = a + b < 4 ? "Below" : "Over";

console.log(result);
