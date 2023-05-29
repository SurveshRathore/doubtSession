//normal function

function sum(a, b, c) {
    return a + b + c;
}
sum(1,2,3); // 6

//currying function
function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) // 6

//instead of line 16 we can call by this
const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6
