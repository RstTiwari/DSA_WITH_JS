/**Now starting the 3rd Chaptewr for, The DSA Book */

// In js 0.1 + 0.2=== 0.3  yeilds as False

console.log(0.1 + 0.2 === 0.3);
/* to really understand why 0.1 cannot be represented properly as a 32-bit floating point number,
we must understand Binary Digit, say for  1010 represnet  10 in binary system for to evaluate 1/10 
1/1010 = 0.0011000000000 so on ... 
*/

// JS in built Method to work around this problem
console.log(Math.round(0.49));
console.log(Math.ceil(0.49));
console.log(Math.floor(0.49));

Math.round(2.9); // 3
Math.ceil(0.1); // 1
Math.ceil(0.9); // 1
Math.ceil(21);

//Number.EPSILON
console.log(Number.EPSILON);
function numberisEqual(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}
console.log(numberisEqual(0.2 + 0.2, 0.3)); //False because Number.EPSILIOn will less then the  difference
console.log(numberisEqual(0.1 + 0.2, 0.3)); //True  because Number.EPSILIOn will greater  then tthe difference.

// Number.MAX_SAFE_INTEGER     => returns maxium number
