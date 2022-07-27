/*Lo arrabmh ho subARRAMBH MANGAL BELLA AAI"
"sapno ke dehlij pe baaje hai sehnai ehnai "*/

//Big-O Notation Primer

/**The Big-O notation measures the worst-case complexity of an algorithm ,if 
  n is input of function and it approches infinity */

/** see the graph in text book , for O(n) time and input will
  remain Constant O(n*2) , O(n*3) are quadratic and cubic O notaion */

function linear(n) {
  console.log("jddjj");
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
    }
  }
}

function quadratic(n) {
  console.log("jddjj");
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
    }
  }
}

function cubic(n) {
  console.log("jddjj");
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
      for (let k = j; k < n; k++) {
        console.log(k);
      }
    }
  }
}

cubic(30);

// Rules for Big notation

// 1) Coefficent Rule =>  f f(n) is O(g(n)), then kf(n) is O(g(n)), for any constant k > 0

function a(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  return count;
}

function a(n) {
  let count = 0;
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}
// both will have O(n) in time Comnplexity because as n approcehs infinty the coeeficent k will be neglible
function a(n) {
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  count += 3; // this operation become neglible as input oproches infinity
  return count;
} //agian this function is also having O(n) time Complexity

// 2) Sum Rule => If f(n) is O(h(n)) and g(n) is O(p(n)),then f(n)+g(n) is O(h(n)+p(n)).

// if master algorithm is having two more algorithm then O(n) of master alogrithm is sum two algorithm.

function sumRule(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1; // here f(n)  is n
  }
  for (let j = 0; j < 5 * n; j++) {
    count += 3; // here f(n) is 5*n
  }
} // the O notation of this function sum of n + 5n = 6n but once we apply coefficent rule  after sum rule it will become f(n)

// 3) PRODUCT Rule =>  If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n)).
function procutRule(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1; // here f(n)  is n
  }
  for (let j = 0; j < 5 * n; j++) {
    count += 3; // here f(n) is 5*n
  }
} // the o notation of this product product n*5n = 5n**2   but again after applying coefficent rule n**2 only

// 4) polynomial Rule =>  If f(n) is a polynomial of degree k, then f(n) is O(nk).
function a(n) {
  var count = 0;
  for (var i = 0; i < n * n; i++) {
    count += 1;
  }
  return count;
} // as it willitrrate over n^n time

// 5) Trasient Rule =>`

// 6) Log of Power Rule =>
