// impl 1
Function.prototype.myBind = function (obj, ...args1) {
    const bindFunc = (...args2) => {
        const key = Symbol()
        obj[key] = this
        const res = obj[key](...args1, ...args2)
        delete obj[key]
        return res
    }
    return bindFunc
}

// impl 2
// Function.prototype.myBind = function (obj, ...args1) {
//     const bindFunc = (...args2) => this.call(obj, ...args1, ...args2)
//     return bindFunc
// }

// test code
const person = {
    name: 'Bill'
}
function test(num1, num2, num3, num4) {
    console.log('this', this)
    console.log('num1', num1)
    console.log('num2', num2)
    console.log('num3', num3)
    console.log('num4', num4)
    return num1 + num2 + num3 + num4
}
const bindFunc = test.myBind(person, 4, 5)
console.log('before', person)
const res = bindFunc(6, 7)
console.log('after', person)
console.log('res', res)