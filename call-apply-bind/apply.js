Function.prototype.myApply = function (obj, args){
    const key = Symbol()
    obj[key] = this
    const res = obj[key](...args)
    delete obj[key]
    return res
}

// test code
const person = {
    name: 'Bill'
}
function test(num1, num2) {
    console.log(test instanceof Function);
    console.log('this', this)
    console.log('num1', num1, 'num2', num2)
    return num1 + num2
}
const res = test.myApply(person, [2,3])
console.log('res', res)
console.log(person)