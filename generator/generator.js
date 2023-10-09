// Generator
// ES6 solution for async
// Sit between Promise and async/await
function* testGenerator(){
  yield 'abc'
  yield 123
  yield true
}

const test = testGenerator()
// const val1 = test.next()
// console.log(val1) // { value: 'abc', done: false }
// const val2 = test.next()
// console.log(val2) // { value: 123, done: false }
// const val3 = test.next()
// console.log(val3) // { value: true, done: false }
// const val4 = test.next()
// console.log(val4) // { value: undefined, done: true }

for(const iterator of test){
  console.log(iterator);  // abc
                          // 123
                          // true
}


