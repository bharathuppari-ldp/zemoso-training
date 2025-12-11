if (true) {
 let a = 40;
 console.log(a);
}
//console.log(a); // undefined

const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go'];

LANGUAGES.push('Java'); // Works
console.log(LANGUAGES);

var newOne = () => {
 console.log("Hello World..!");
}
newOne();

let arr = [2,3,4,1];
for (let value of arr) {
 console.log(value);
}

let SumElements = (...arr) => {
 console.log(arr); 
let sum = 0;
 for (let element of arr) {
  sum += element;
 }
 console.log(sum); 
}
SumElements(10,20,30,40,50)

var NewMap = new Map();
NewMap.set('name', 'Bharath'); 
NewMap.set('id', 12345);
NewMap.set('interest', ['js', 'java', 'python']);
console.log(NewMap.get('name'));
console.log(NewMap.get('id'));
console.log(NewMap.get('interest'));

var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('a'); // We are adding duplicate value.
for (let element of sets) {
 console.log(element);
}

class Example {
 static Callme() {
 console.log("Static method");
 }
}
Example.Callme();

class People {
constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
    setName(name) {
      this.name = name;
    }
}
let person = new People("abc");
console.log(person.getName());
person.setName("def");
console.log(person.getName());

