//Passing a function as an argument
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!

//Assigning a function to a variable
const foo = () => {
  console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar

//Returning a function
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
