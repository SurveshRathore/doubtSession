let text3 = "John Doe";
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes



//Escape Character
let text1 = "We are the so-called \"Vikings\" from the north.";
let text2= 'It\'s alright.';

let x = new String("John");  // x is an object
let y = new String("John");  // y is an object

console.log((x===y));

let text = "Apple, Banana, Kiwi";

let length = text.length
console.log("length---> ",length)

let part = text.slice(7, 13);
console.log("slice---> ",part);
console.log(text.slice(7));
console.log(text.slice(-12));
console.log(text.slice(-12, -6));

let text5 = '5'
var padded = text5.padStart(4, '0')
console.log(padded);
var padded = text5.padStart(5, '0')
console.log(padded);
var padded = text5.padStart(1, '0')
console.log(padded);