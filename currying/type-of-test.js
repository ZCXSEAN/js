// const typeOfTest = function (type) {
//     function check (thing) {
//         return typeof thing === type
//     }
//     return check
// }

const typeOfTest = type => thing => typeof thing === type
const isString = typeOfTest('string')
const isUndefined = typeOfTest('undefined')

console.log(isString('abc')); // true
console.log(isString(111)); // false
console.log(isUndefined(undefined)); // true
console.log(isUndefined('hello')); // false