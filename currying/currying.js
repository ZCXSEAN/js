let nums = []
function sum(...args) {
    nums.push(...args)
    if (nums.length < 5) {
        return sum
    } else {
        const res = nums.slice(0, 5).reduce((p, v) => p + v, 0)
        nums = []
        return res
    }
}
const res = sum(1, 2)(3, 4)(5, 6, 7)
console.log(res) // 15
const res2 = sum(999, 2)(3, 4)(5, 6, 7)
console.log(res2) // 1013






function sumMaker(n) {
    let nums2 = []
    return function sum(...args) {
        nums2.push(...args)
        if (nums2.length < n) {
            return sum
        } else {
            const res = nums2.slice(0, n).reduce((p, v) => p + v, 0)
            nums2 = []
            return res
        }
    }
}
const sum6 = sumMaker(6)
const res3 = sum6(1, 2)(3, 4)(5, 6, 7)
console.log(res3) // 21
const sum10 = sumMaker(10)
const res4 = sum10(1, 2)(3, 4)(5, 6, 7)(8, 9, 10, 11)
console.log(res4) // 55
const sum100 = sumMaker(100)
const res5 = sum100(1, 2)(3, 4)(5, 6, 7)(8, 9, 10, 11)
console.log(res5) // [Function: sum]