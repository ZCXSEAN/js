// Base class constructor
function Person(name){
  this.name = name
}

// Base class prototype
Person.prototype.greet = function (){
  console.log(`Hi, this is ${this.name}.`);
}

// Sub class constructor
// Inherit fields
function Student(name, id){
  Person.call(this, name)
  this.id = id
}

// Sub class prototype
// param1: original obj
// param2: override fields/methods in the original obj
const prototype = Object.create(Person.prototype, {
  constructor: {
    value: Student
  }
})
Student.prototype = prototype

Student.prototype.study = function(subject){
  console.log(`[${this.id}] Student ${this.name} is studying ${subject}`);
}

const s = new Student('Bill', 1001)
s.study('English')
s.greet()