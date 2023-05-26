
const result = new Function("a", "b", "return a *b");

console.log(result(2,3));

// same as
// const result = function(a,b){return a * b}

// console.log(result(2,3));
