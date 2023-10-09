class Person {
  name

  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(`Hi, I am ${this.name}. -- from Person`)
  }
}

class Student extends Person{
  age
  #privateField

  constructor(name, age){
    super(name)
    this.age = age
  }
  greet(){
    this.#privateField = 'private data'
    console.log(`Hi, I am ${this.name}, ${this.age} years old. -- from Student`)
  }
}

const s = new Student()
s.greet()
// console.log(s.#privateField);