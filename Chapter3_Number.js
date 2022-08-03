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

//>>>>>>>>Number.EPSILON
console.log(Number.EPSILON);
function numberisEqual(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}
console.log(numberisEqual(0.2 + 0.2, 0.3)); //False because Number.EPSILIOn will less then the  difference
console.log(numberisEqual(0.1 + 0.2, 0.3)); //True  because Number.EPSILIOn will greater  then tthe difference.

// MAXIMUS .====>>>>>>>>>

// Number.MAX_SAFE_INTEGER   returns maxium number
console.log(Number.MAX_SAFE_INTEGER + 1 == Number.MAX_SAFE_INTEGER + 3);

// MAX_SAFE_INTEGER Numbers does not work well with the Float Numbers.
console.log(Number.MAX_SAFE_INTEGER + 1.112 == Number.MAX_SAFE_INTEGER);

// MAX_VALUE
// unlike MAX_SAFE_INTEGER there is another property MAX_VALUE works well with float Number as well
console.log(Number.MAX_VALUE + 1.011 == Number.MAX_VALUE + 2.2); //Eavalute to true

// MINIMUS  ======>>>>>
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER - 1 == Number.MIN_SAFE_INTEGER - 2); //Evaluate to True
console.log(Number.MIN_SAFE_INTEGER + 1 == Number.MIN_SAFE_INTEGER + 2); //Evaluate to false

// INFINITY ====>>>>

console.log(Infinity > Number.MAX_VALUE);
console.log(-Infinity < Number.MIN_VALUE);
console.log(-Infinity - 245678 == -Infinity - 2851258622); //this why we called the Javascript to loose Controlled Language

// SIZE MEMORY
Infinity <
  Number.MIN_SAFE_INTEGER <
  Number.MIN_VALUE <
  0 <
  Number.MAX_SAFE_IN_TEGER <
  Number.MAX_VALUE <
  Infinity;

// Aogrithm to Check Prime number

// the old method
function toCheckPrime(n) {
  if (n <= 1) {
    return n + " is Prime Number";
  }

  for (let i = 2; i < n; i++) {
    if (n % 2 == 0) {
      return n + " is not a Prime Number";
    }
  }
  return n + " is a Prime Number";
}
console.log(toCheckPrime(35)); // time compelxity of this ALorithm is O(n) bacase it's check 2 to n

/*let's improve the following alogrithm  first 
as we know any Number can sum as prime number if
   6k+-1 = Number where k Is constant
only 2, 3 are exception here
*/

function toCheckPrimeNew(n) {
  // n is less than 1
  if (n <= 1) {
    return n + " is Prime Number";
  }
  // condition for 2, 3 bacause they are Prime Number
  if (n <= 3) {
    return n + " is Prime Number";
  }

  // check divisible by 2 or 3
  if (n % 2 == 0 || n % 3 == 0) {
    return n + " is not a Prime Number";
  }

  // now go ahed and check for the  square Root and 6k +1 condition
  for (let i = 5; i * i < n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return n + " is not a Prime Number";
    }
  }
  return n + " is Prime Number";
}

console.log(toCheckPrimeNew(1201));
